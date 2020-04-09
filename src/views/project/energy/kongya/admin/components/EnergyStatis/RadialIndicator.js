'use strict'
// circumfence and quart value to start bar from top
var circ = Math.PI * 2
var quart = Math.PI / 2

// function to smooth canvas drawing for ratina devices

// method to manage device pixel ratio in ratina devices
var smoothCanvas = (function() {
  var ctx = document.createElement('canvas').getContext('2d')
  var dpr = window.devicePixelRatio || 1
  var bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1

  var ratio = dpr / bsr // PIXEL RATIO

  return function(w, h, canvasElm) {
    var can = canvasElm || document.createElement('canvas')
    can.width = w * ratio
    can.height = h * ratio
    can.style.width = w + 'px'
    can.style.height = h + 'px'
    can.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0)
    return can
  }
}())

// function to convert hex to rgb
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null
}

function getPropVal(curShift, perShift, bottomRange, topRange) {
  return Math.round(bottomRange + ((topRange - bottomRange) * curShift / perShift))
}

// function to get current color in case of
function getCurrentColor(curPer, bottomVal, topVal, bottomColor, topColor) {
  var rgbAryTop = topColor.indexOf('#') !== -1 ? hexToRgb(topColor) : topColor.match(/\d+/g)
  var rgbAryBottom = bottomColor.indexOf('#') !== -1 ? hexToRgb(bottomColor) : bottomColor.match(/\d+/g)
  var perShift = topVal - bottomVal
  var curShift = curPer - bottomVal

  if (!rgbAryTop || !rgbAryBottom) return null

  return 'rgb(' + getPropVal(curShift, perShift, rgbAryBottom[0], rgbAryTop[0]) + ',' + getPropVal(curShift, perShift, rgbAryBottom[1], rgbAryTop[1]) + ',' + getPropVal(curShift, perShift, rgbAryBottom[2], rgbAryTop[2]) + ')'
}

// to merge object
function merge() {
  var arg = arguments
  var target = arg[0]
  for (var i = 1, ln = arg.length; i < ln; i++) {
    var obj = arg[i]
    for (var k in obj) {
      if (obj.hasOwnProperty(k)) {
        target[k] = obj[k]
      }
    }
  }
  return target
}

// function to apply formatting on number depending on parameter
function formatter(pattern) {
  return function(num) {
    if (!pattern) return num.toString()
    num = num || 0
    var numRev = num.toString().split('').reverse()
    var output = pattern.split('').reverse()
    var i = 0
    var lastHashReplaced = 0

    // changes hash with numbers
    for (var ln = output.length; i < ln; i++) {
      if (!numRev.length) break
      if (output[i] === '#') {
        lastHashReplaced = i
        output[i] = numRev.shift()
      }
    }

    // add overflowing numbers before prefix
    output.splice(lastHashReplaced + 1, output.lastIndexOf('#') - lastHashReplaced, numRev.reverse().join(''))

    return output.reverse().join('')
  }
}

// circle bar class
function Indicator(container, indOption) {
  var self = this

  indOption = indOption || {}
  indOption = merge({}, radialIndicator.defaults, indOption)

  this.indOption = indOption

  // create a queryselector if a selector string is passed in container
  if (typeof container === 'string') { container = document.querySelector(container) }

  // get the first element if container is a node list
  if (container.length) { container = container[0] }

  container.style.display = 'flex'
  container.style.justifyContent = 'center'
  container.style.alignItems = 'center'
  container.innerHTML = ''

  this.container = container

  if (this.indOption.autoRadius) {
    var cWidth = container.clientWidth
    var cHeight = container.clientHeight
    var cSize = cWidth
    if (cWidth > cHeight) cSize = cHeight
    this.indOption.radius = (cSize - this.indOption.barWidth * 2) / 2.0 * 0.85
  }

  // create a canvas element
  var canElm = document.createElement('canvas')
  container.appendChild(canElm)

  this.canElm = canElm // dom object where drawing will happen

  this.ctx = canElm.getContext('2d') // get 2d canvas context

  // add intial value
  this.current_value = indOption.initValue || indOption.minValue || 0

  // handeling user interaction
  var startListener = function(e) {
    if (!indOption.interaction) return

    var touchMove = e.type === 'touchstart' ? 'touchmove' : 'mousemove'
    var touchEnd = e.type === 'touchstart' ? 'touchend' : 'mouseup'
    var position = canElm.getBoundingClientRect()
    var cy = position.top + canElm.offsetHeight / 2
    var cx = position.left + canElm.offsetWidth / 2

    var moveListener = function(e) {
      e.preventDefault()

      // get the cordinates
      var mx = e.clientX || e.touches[0].clientX
      var my = e.clientY || e.touches[0].clientY
      var radian = (circ + quart + Math.atan2((my - cy), (mx - cx))) % (circ + 0.0175)
      var radius = (indOption.radius - 1 + indOption.barWidth / 2)
      var circum = circ * radius
      var precision = indOption.precision !== null ? indOption.precision : 0
      var precisionNo = Math.pow(10, precision)
      var val = Math.round(precisionNo * radian * radius * (indOption.maxValue - indOption.minValue) / circum) / precisionNo

      self.value(val)
    }

    var endListener = function() {
      document.removeEventListener(touchMove, moveListener, false)
      document.removeEventListener(touchEnd, endListener, false)
    }

    document.addEventListener(touchMove, moveListener, false)
    document.addEventListener(touchEnd, endListener, false)
  }

  canElm.addEventListener('touchstart', startListener, false)
  canElm.addEventListener('mousedown', startListener, false)

  canElm.addEventListener('mousewheel', MouseWheelHandler, false)
  canElm.addEventListener('DOMMouseScroll', MouseWheelHandler, false)

  function MouseWheelHandler(e) {
    if (!indOption.interaction) return
    e.preventDefault()

    // cross-browser wheel delta
    var delta = -(Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))))
    var precision = indOption.precision !== null ? indOption.precision : 0
    var precisionNo = Math.pow(10, precision)
    var diff = indOption.maxValue - indOption.minValue
    var val = self.current_value + Math.round(precisionNo * delta * diff / Math.min(diff, 100)) / precisionNo

    self.value(val)

    return false
  }
}

Indicator.prototype = {
  constructor: radialIndicator,
  _init: function() {
    var indOption = this.indOption
    var canElm = this.canElm
    var dim = (indOption.radius + indOption.barWidth) * 2 + 4 // elm width and height

    // create a formatter function
    this.formatter = typeof indOption.format === 'function' ? indOption.format : formatter(indOption.format)

    // maximum text length;
    this.maxLength = indOption.percentage ? 4 : this.formatter(indOption.maxValue).length

    // smooth the canvas elm for ratina display
    if (indOption.hasShadow) {
      smoothCanvas(dim + 20, dim + 20, canElm)
    } else {
      smoothCanvas(dim, dim, canElm)
    }

    // draw background bar
    this._drawBarBg()

    // put the initial value if defined
    this.value(this.current_value)

    return this
  },
  // draw background bar
  _drawBarBg: function() {
    var indOption = this.indOption
    var ctx = this.ctx
    var dim = (indOption.radius + indOption.barWidth) * 2 + 4 // elm width and height
    var center = dim / 2 // center point in both x and y axis

    // draw nackground circle
    ctx.strokeStyle = indOption.barBgColor // background circle color
    ctx.lineWidth = indOption.barWidth
    if (indOption.barBgColor !== 'transparent') {
      ctx.beginPath()
      ctx.arc(center, center, indOption.radius - 1 + indOption.barWidth / 2, 0, 2 * Math.PI)
      ctx.stroke()
    }
  },
  // update the value of indicator without animation
  value: function(val) {
    var imgData = []

    // return the val if val is not provided
    if (val === undefined || isNaN(val)) {
      return this.current_value
    }

    val = parseFloat(val)

    var ctx = this.ctx
    var indOption = this.indOption
    var curColor = indOption.barColor
    var dim = (indOption.radius + indOption.barWidth) * 2
    var minVal = indOption.minValue
    var maxVal = indOption.maxValue
    var center = dim / 2
    if (typeof indOption.gradBarColor === 'object') {
      var canvas = document.createElement('canvas')
      canvas.width = 360
      var ctx1 = canvas.getContext('2d')

      var grd = ctx1.createLinearGradient(0, 0, 360, 0)
      for (var stopNum in indOption.gradBarColor) {
        if (stopNum >= 0 && stopNum <= 1) {
          grd.addColorStop(stopNum, indOption.gradBarColor[stopNum])
        }
      }
      /* grd.addColorStop(0  , 'rgb(0,90,255)');
            grd.addColorStop(1  , 'rgb(0,225,255)');*/

      ctx1.fillStyle = grd
      ctx1.fillRect(0, 0, 360, 1)

      imgData = ctx1.getImageData(0, 0, 360, 1).data
    }

    // limit the val in range of minumum and maximum value
    val = val < minVal ? minVal : val > maxVal ? maxVal : val

    var precision = indOption.precision !== null ? indOption.precision : 0
    var precisionNo = Math.pow(10, precision)
    var perVal = Math.round(((val - minVal) * precisionNo / (maxVal - minVal)) * 1000) / precisionNo / 10 // percentage value tp two decimal precision
    var dispVal = indOption.displayTitle || (indOption.percentage ? perVal + '%' : this.formatter(val)) // formatted value

    // save val on object
    this.current_value = val

    // draw the bg circle
    ctx.clearRect(0, 0, dim, dim)
    this._drawBarBg()

    // get current color if color range is set
    if (typeof curColor === 'object') {
      var range = Object.keys(curColor)

      for (var i = 1, ln = range.length; i < ln; i++) {
        var bottomVal = range[i - 1]
        var topVal = range[i]
        var bottomColor = curColor[bottomVal]
        var topColor = curColor[topVal]
        var newColor = val === bottomVal ? bottomColor : val === topVal ? topColor : val > bottomVal && val < topVal ? indOption.interpolate ? getCurrentColor(val, bottomVal, topVal, bottomColor, topColor) : topColor : false

        if (newColor !== false) {
          curColor = newColor
          break
        }
      }
    }

    // draw th circle value
    ctx.strokeStyle = curColor

    // add linecap if value setted on options
    if (indOption.roundCorner) ctx.lineCap = 'round'

    var cRadius = indOption.radius - 1 + indOption.barWidth / 2
    var startAngle = 0
    var endAngle = ((circ) * perVal / 100)

    if (imgData.length === 1440) {
      var startAngleNum = Math.round(startAngle / Math.PI * 180)
      var endAngleNum = Math.round(endAngle / Math.PI * 180)

      for (i = startAngleNum; i < endAngleNum; i++) {
        ctx.beginPath()
        if (indOption.hasShadow) {
          ctx.shadowBlur = 6
          ctx.shadowOffsetY = 4
          ctx.shadowOffsetX = 4
          ctx.shadowColor = 'rgba(' + imgData[(i - startAngleNum) * 4] + ',' + imgData[(i - startAngleNum) * 4 + 1] + ',' + imgData[(i - startAngleNum) * 4 + 2] + ',0.05)'
        }
        ctx.strokeStyle = 'rgb(' + imgData[(i - startAngleNum) * 4] + ',' + imgData[(i - startAngleNum) * 4 + 1] + ',' + imgData[(i - startAngleNum) * 4 + 2] + ')'
        ctx.arc(center, center, cRadius, i / 180.0 * Math.PI, (i + 1) / 180.0 * Math.PI, false)
        ctx.stroke()
      }
      ctx.lineWidth = 1
      for (i = startAngleNum; i < endAngleNum; i++) {
        ctx.beginPath()
        ctx.strokeStyle = 'rgb(' + imgData[(i - startAngleNum) * 4] + ',' + imgData[(i - startAngleNum) * 4 + 1] + ',' + imgData[(i - startAngleNum) * 4 + 2] + ')'
        ctx.arc(center, center, cRadius - indOption.barWidth / 2 - 8, i / 180.0 * Math.PI, (i + 1) / 180.0 * Math.PI, false)
        ctx.stroke()
      }
      ctx.shadowBlur = 0
      ctx.shadowOffsetY = 0
      ctx.shadowOffsetX = 0
      ctx.shadowColor = 'rgba(0,0,0,0)'
      if (indOption.hasStartPoint) {
        if (indOption.barWidth > 4) {
          var centerX = center + cRadius
          var centerY = center
          var ccradius = indOption.barWidth / 2 + 1

          ctx.lineWidth = 2
          ctx.fillStyle = '#fff'
          ctx.strokeStyle = indOption.gradBarColor[0]

          ctx.beginPath()
          ctx.arc(centerX, centerY, ccradius, 0, 2 * Math.PI, false)
          ctx.fill()
          ctx.stroke()

          ctx.lineWidth = null
          ctx.fillStyle = null
        }
      }
    } else {
      ctx.beginPath()
      ctx.arc(center, center, cRadius, startAngle, endAngle, false)
      ctx.stroke()
    }

    // ctx.arc(center, center, cRadius, startAngle, endAngle, false);

    // add percentage text
    if (indOption.displayNumber) {
      var cFont = ctx.font.split(' ')
      var weight = indOption.fontWeight
      var fontSize = indOption.fontSize || (dim / (this.maxLength - (Math.floor(this.maxLength * 1.4 / 4) - 1)) * 0.85)

      cFont = indOption.fontFamily || cFont[cFont.length - 1]

      ctx.fillStyle = indOption.fontColor || curColor
      ctx.font = weight + ' ' + fontSize + 'px ' + cFont
      ctx.textAlign = 'center'
      ctx.textBaseline = indOption.textBaseline
      var txtWidth = ctx.measureText(dispVal).width || fontSize
      // var txtHeight = ctx.measureText(dispVal).emHeightDescent || fontSize / 2.0
      ctx.fillText(dispVal, center, center)
      if (indOption.displayNumberLine) {
        if (indOption.displayNumberLineText !== undefined) {
          ctx.fillStyle = '#666'
          ctx.font = 'normal ' + (fontSize * 0.4) + 'px Arial'
          ctx.textAlign = 'center'
          ctx.textBaseline = indOption.textBaseline
          ctx.fillText(indOption.displayNumberLineText, center, center + fontSize)
        }
      }
    } else {
      if (indOption.displayLetter) {
        var centerLetter = 'E'
        var centerMarker = ''
        if (perVal >= 95) {
          centerLetter = 'A'
          centerMarker = '+'
        } else if (perVal < 95 && perVal >= 90) {
          centerLetter = 'A'
          centerMarker = '-'
        } else if (perVal < 90 && perVal >= 85) {
          centerLetter = 'B'
          centerMarker = '+'
        } else if (perVal < 85 && perVal >= 80) {
          centerLetter = 'B'
          centerMarker = '-'
        } else if (perVal < 80 && perVal >= 75) {
          centerLetter = 'C'
          centerMarker = '+'
        } else if (perVal < 75 && perVal >= 70) {
          centerLetter = 'C'
          centerMarker = '-'
        } else if (perVal < 70 && perVal >= 65) {
          centerLetter = 'D'
          centerMarker = '+'
        } else if (perVal < 65 && perVal >= 60) {
          centerLetter = 'D'
          centerMarker = '-'
        }

        cFont = ctx.font.split(' ')
        weight = indOption.fontWeight
        fontSize = indOption.radius * 1.4

        cFont = indOption.fontFamily || cFont[cFont.length - 1]
        var grd2 = ctx.createLinearGradient(0, 0, 0, Math.floor(fontSize * 1.8))

        grd2.addColorStop(1, 'rgb(0,90,255)')
        grd2.addColorStop(0, 'rgb(0,225,255)')
        ctx.fillStyle = grd2
        ctx.font = weight + ' ' + fontSize + 'px ' + cFont
        ctx.textAlign = 'center'
        ctx.textBaseline = 'Hanging'
        txtWidth = ctx.measureText(centerLetter).width || fontSize
        var txtHeight1 = ctx.measureText(centerLetter).emHeightDescent || fontSize / 4.0
        // var txtHeight2 = ctx.measureText(centerLetter).emHeightAscent || fontSize * 3 / 4.0

        ctx.fillText(centerLetter, center, center + fontSize / 2.5)

        fontSize = fontSize * 0.3
        fontSize < 10 ? fontSize = 10 : true
        ctx.font = weight + ' ' + fontSize + 'px ' + cFont
        ctx.fillText(centerMarker, center + txtWidth * 0.5, center - txtHeight1)
      }
    }

    // call onChange callback
    indOption.onChange.call(this.container, val)

    return this
  },
  // animate progressbar to the value
  animate: function(val) {
    var indOption = this.indOption
    var counter = this.current_value || indOption.minValue
    var self = this
    var minVal = indOption.minValue
    var maxVal = indOption.maxValue
    var frameNum = indOption.frameNum || (indOption.percentage ? 100 : 500)
    var precision = indOption.precision !== null ? indOption.precision : Math.ceil(Math.log(maxVal - minVal / frameNum))
    var precisionNo = Math.pow(10, precision)
    var incBy = (maxVal - minVal) / frameNum // increment by .2% on every tick and 1% if showing as percentage

    // limit the val in range of minumum and maximum value
    val = val < minVal ? minVal : val > maxVal ? maxVal : val

    var back = val < counter

    // clear interval function if already started
    if (this.intvFunc) clearInterval(this.intvFunc)

    this.intvFunc = setInterval(function() {
      if ((!back && counter >= val) || (back && counter <= val)) {
        if (self.current_value === counter) {
          clearInterval(self.intvFunc)
          if (indOption.onAnimationComplete) indOption.onAnimationComplete(self.current_value)
          return
        } else {
          counter = val
        }
      }

      self.value(counter) // dispaly the value

      if (counter !== val) {
        counter = Math.round((counter + (back ? -incBy : incBy)) * precisionNo) / precisionNo
      } // increment or decrement till counter does not reach  to value
    }, indOption.frameTime)

    return this
  },
  // method to update options
  option: function(key, val) {
    if (val === undefined) return this.option[key]

    if (['radius', 'barWidth', 'barBgColor', 'format', 'maxValue', 'percentage', 'gradBarColor'].indexOf(key) !== -1) {
      this.indOption[key] = val
      this._init().value(this.current_value)
    }
    this.indOption[key] = val
  }

}

/** Initializer function **/
function radialIndicator(container, options) {
  var progObj = new Indicator(container, options)
  progObj._init()
  return progObj
}

// radial indicator defaults
radialIndicator.defaults = {
  autoRadius: false,
  hasStartPoint: false,
  hasShadow: false,
  radius: 50, // inner radius of indicator
  barWidth: 5, // bar width
  barBgColor: '#eeeeee', // unfilled bar color
  barColor: '#99CC33', // filled bar color , can be a range also having different colors on different value like {0 : "#ccc", 50 : '#333', 100: '#000'}
  format: null, // format indicator numbers, can be a # formator ex (##,###.##) or a function
  frameTime: 10, // miliseconds to move from one frame to another
  frameNum: null, // Defines numbers of frame in indicator, defaults to 100 when showing percentage and 500 for other values
  fontColor: null, // font color
  fontFamily: null, // defines font family
  fontWeight: 'normal', // defines font weight
  fontSize: null, // define the font size of indicator number
  textBaseline: 'middle', // define the text base line of indicator number
  interpolate: true, // interpolate color between ranges 在范围之间插入颜色
  percentage: false, // show percentage of value
  precision: null, // default value for precision depend on difference between min and max divided by number of frames
  displayNumber: true, // display indicator number
  displayTitle: null,
  displaySubTitle: null,
  displayNumberLine: false,
  roundCorner: false, // have round corner in filled bar
  minValue: 0, // minimum value
  maxValue: 100, // maximum value
  initValue: 0, // define initial value of indicator,
  interaction: false, // if true it allows to change radial indicator value using mouse or touch interaction
  onChange: function() {}
}

export default radialIndicator
