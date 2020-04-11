var svg = '<defs>\n' +
'        <path d="M530.966116,99 L536.966116,99 L536.966116,172 C536.966116,175.313708 534.279824,178 530.966116,178 L118.966116,178 C117.861546,178 116.966116,178.895431 116.966116,180 L116.966116,206 L110.966116,206 L110.966116,178 C110.966116,174.686292 113.652407,172 116.966116,172 L528.966116,172 C530.070685,172 530.966116,171.104569 530.966116,170 L530.966116,99 Z" id="path-1"></path>\n' +
'        <filter x="-0.4%" y="-1.4%" width="100.7%" height="102.8%" filterUnits="objectBoundingBox" id="filter-2">\n' +
'            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="1" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.919865263   0 0 0 0 0.403295385   0 0 0 0 0  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M545.966116,172 L545.966116,99 L551.966116,99 L551.966116,170 C551.966116,171.104569 552.861546,172 553.966116,172 L694.754712,172 C698.06842,172 700.754712,174.686292 700.754712,178 L700.754712,206 L694.754712,206 L694.754712,180 C694.754712,178.895431 693.859281,178 692.754712,178 L551.966116,178 C548.652407,178 545.966116,175.313708 545.966116,172 Z" id="path-3"></path>\n' +
'        <filter x="-1.0%" y="-1.4%" width="101.9%" height="102.8%" filterUnits="objectBoundingBox" id="filter-4">\n' +
'            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="1" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.919865263   0 0 0 0 0.403295385   0 0 0 0 0  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M1023.26119,84 L568.966116,84 L568.966116,78 L1025.26119,78 C1028.5749,78 1031.26119,80.6862915 1031.26119,84 L1031.26119,342 C1031.26119,343.104569 1032.15662,344 1033.26119,344 L1116.96612,344 L1116.96612,350 L1031.26119,350 C1027.94748,350 1025.26119,347.313708 1025.26119,344 L1025.26119,86 C1025.26119,84.8954305 1024.36576,84 1023.26119,84 Z" id="path-5"></path>\n' +
'        <filter x="-0.3%" y="-0.6%" width="100.5%" height="101.1%" filterUnits="objectBoundingBox" id="filter-6">\n' +
'            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="1" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.919865263   0 0 0 0 0.403295385   0 0 0 0 0  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M117.966116,276.103864 L117.966116,270.103864 L580.966116,270.103864 C584.279824,270.103864 586.966116,272.790156 586.966116,276.103864 L586.966116,388 L580.966116,388 L580.966116,278.103864 C580.966116,276.999295 580.070685,276.103864 578.966116,276.103864 L117.966116,276.103864 Z" id="path-7"></path>\n' +
'        <filter x="-0.3%" y="-1.3%" width="100.6%" height="102.5%" filterUnits="objectBoundingBox" id="filter-8">\n' +
'            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="1" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.919865263   0 0 0 0 0.403295385   0 0 0 0 0  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M622.621332,388 L616.621332,388 L616.621332,276.103864 C616.621332,272.790156 619.307623,270.103864 622.621332,270.103864 L688.966116,270.103864 L688.966116,276.103864 L624.621332,276.103864 C623.516762,276.103864 622.621332,276.999295 622.621332,278.103864 L622.621332,388 Z" id="path-9"></path>\n' +
'        <filter x="-2.1%" y="-1.3%" width="104.1%" height="102.5%" filterUnits="objectBoundingBox" id="filter-10">\n' +
'            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="1" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.919865263   0 0 0 0 0.403295385   0 0 0 0 0  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M717.966116,206 L711.966116,206 L711.966116,127.901704 C711.966116,124.587996 714.652407,121.901704 717.966116,121.901704 L1239.00373,121.901704 C1242.31744,121.901704 1245.00373,124.587996 1245.00373,127.901704 L1245.00373,334 C1245.00373,337.313708 1242.31744,340 1239.00373,340 L1163.96612,340 L1163.96612,334 L1237.00373,334 C1238.1083,334 1239.00373,333.104569 1239.00373,332 L1239.00373,129.901704 C1239.00373,128.797135 1238.1083,127.901704 1237.00373,127.901704 L717.966116,127.901704 L717.966116,206 Z" id="path-11"></path>\n' +
'        <filter x="-0.3%" y="-0.7%" width="100.6%" height="101.4%" filterUnits="objectBoundingBox" id="filter-12">\n' +
'            <feMorphology radius="2" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="0.5" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.262900424   0 0 0 0 0.372847131   0 0 0 0 0.775985054  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M720,707.93518 L720,772 L714,772 L714,647 L720,647 L720,701.93518 L1236.72934,701.93518 C1237.83391,701.93518 1238.72934,701.03975 1238.72934,699.93518 L1238.72934,420 C1238.72934,418.895431 1237.83391,418 1236.72934,418 L1163.96612,418 L1163.96612,412 L1238.72934,412 C1242.04305,412 1244.72934,414.686292 1244.72934,418 L1244.72934,701.93518 C1244.72934,705.248889 1242.04305,707.93518 1238.72934,707.93518 L720,707.93518 Z" id="path-13"></path>\n' +
'        <filter x="-0.3%" y="-0.4%" width="100.6%" height="100.8%" filterUnits="objectBoundingBox" id="filter-14">\n' +
'            <feMorphology radius="2" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="0.5" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.262900424   0 0 0 0 0.372847131   0 0 0 0 0.775985054  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <polygon id="path-15" points="688.966116 246.5 688.966116 252.5 113.966116 252.5 113.966116 246.5"></polygon>\n' +
'        <filter x="-0.3%" y="-25.0%" width="100.5%" height="150.0%" filterUnits="objectBoundingBox" id="filter-16">\n' +
'            <feMorphology radius="2" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="0.5" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.262900424   0 0 0 0 0.372847131   0 0 0 0 0.775985054  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M482,707.93518 L6,707.93518 C2.6862915,707.93518 -1.42067966e-12,705.248889 -1.42108547e-12,701.93518 L-1.42019729e-12,264.99807 C-1.42060311e-12,261.684362 2.6862915,258.99807 6,258.99807 L68.9661157,258.99807 L68.9661157,264.99807 L8,264.99807 C6.8954305,264.99807 6,265.893501 6,266.99807 L6,699.93518 C6,701.03975 6.8954305,701.93518 8,701.93518 L482,701.93518 L482,647 L488,647 L488,770 L482,770 L482,707.93518 Z" id="path-17"></path>\n' +
'        <filter x="-0.3%" y="-0.3%" width="100.6%" height="100.6%" filterUnits="objectBoundingBox" id="filter-18">\n' +
'            <feMorphology radius="2" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="0.5" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.262900424   0 0 0 0 0.372847131   0 0 0 0 0.775985054  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M463.966116,629.5 L463.966116,636.5 L276.466116,636.5 C273.152407,636.5 270.466116,633.813708 270.466116,630.5 L270.466116,233.450852 C270.466116,230.137144 273.152407,227.450852 276.466116,227.450852 L688.966116,227.450852 L688.966116,234.450852 L279.466116,234.450852 C278.361546,234.450852 277.466116,235.346283 277.466116,236.450852 L277.466116,627.5 C277.466116,628.604569 278.361546,629.5 279.466116,629.5 L463.966116,629.5 Z" id="path-19"></path>\n' +
'        <filter x="-0.6%" y="-0.6%" width="101.2%" height="101.2%" filterUnits="objectBoundingBox" id="filter-20">\n' +
'            <feGaussianBlur stdDeviation="2.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.078769375   0 0 0 0 0.464787138   0 0 0 0 0.390552953  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M731.770335,206 L724.770335,206 L724.770335,163.5 C724.770335,161.290861 726.561196,159.5 728.770335,159.5 L952.466116,159.5 C954.675255,159.5 956.466116,161.290861 956.466116,163.5 L956.466116,583.5 C956.466116,585.709139 954.675255,587.5 952.466116,587.5 L737.966116,587.5 L737.966116,580.5 L947.466116,580.5 C948.570685,580.5 949.466116,579.604569 949.466116,578.5 L949.466116,168.5 C949.466116,167.395431 948.570685,166.5 947.466116,166.5 L733.770335,166.5 C732.665765,166.5 731.770335,167.395431 731.770335,168.5 L731.770335,206 Z" id="path-21"></path>\n' +
'        <filter x="-1.1%" y="-0.6%" width="102.2%" height="101.2%" filterUnits="objectBoundingBox" id="filter-22">\n' +
'            <feGaussianBlur stdDeviation="2.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.078769375   0 0 0 0 0.464787138   0 0 0 0 0.390552953  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <polygon id="path-23" points="737.966116 636.5 737.966116 629.5 1194.63781 629.5 1194.63781 636.5"></polygon>\n' +
'        <filter x="-0.5%" y="-35.7%" width="101.1%" height="171.4%" filterUnits="objectBoundingBox" id="filter-24">\n' +
'            <feGaussianBlur stdDeviation="2.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.078769375   0 0 0 0 0.464787138   0 0 0 0 0.390552953  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <polygon id="path-25" points="96 206 90 206 90 88 96 88"></polygon>\n' +
'        <filter x="-41.7%" y="-2.1%" width="183.3%" height="104.2%" filterUnits="objectBoundingBox" id="filter-26">\n' +
'            <feGaussianBlur stdDeviation="2.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.078769375   0 0 0 0 0.464787138   0 0 0 0 0.390552953  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M654,401 L1111,401 L1111,407 L656,407 C654.895431,407 654,407.895431 654,409 L654,423 L648,423 L648,407 C648,403.686292 650.686292,401 654,401 Z" id="path-27"></path>\n' +
'        <filter x="-0.3%" y="-6.8%" width="100.6%" height="113.6%" filterUnits="objectBoundingBox" id="filter-28">\n' +
'            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="1" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.919865263   0 0 0 0 0.403295385   0 0 0 0 0  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <polygon id="path-29" points="671.678214 466 677.678214 466 677.678214 494.084543 671.678214 494.084543"></polygon>\n' +
'        <filter x="-25.0%" y="-5.3%" width="150.0%" height="110.7%" filterUnits="objectBoundingBox" id="filter-30">\n' +
'            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="1" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.919865263   0 0 0 0 0.403295385   0 0 0 0 0  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M652.966116,648 L652.966116,568 C652.966116,563.581722 649.384394,560 644.966116,560 C640.547838,560 636.966116,563.581722 636.966116,568 L636.966116,648 C636.966116,655.731986 630.698102,662 622.966116,662 C615.234129,662 608.966116,655.731986 608.966116,648 L608.966116,568 C608.966116,563.581722 605.384394,560 600.966116,560 C596.547838,560 592.966116,563.581722 592.966116,568 L592.966116,648 C592.966116,655.731986 586.698102,662 578.966116,662 C571.234129,662 564.966116,655.731986 564.966116,648 L564.966116,568 C564.966116,563.581722 561.384394,560 556.966116,560 C552.547838,560 548.966116,563.581722 548.966116,568 L548.966116,648 C548.966116,655.731986 542.698102,662 534.966116,662 C527.234129,662 520.966116,655.731986 520.966116,648 L520.966116,568 C520.966116,563.581722 517.384394,560 512.966116,560 C508.547838,560 504.966116,563.581722 504.966116,568 L504.966116,658 L498.966116,658 L498.966116,568 C498.966116,560.268014 505.234129,554 512.966116,554 C520.698102,554 526.966116,560.268014 526.966116,568 L526.966116,648 C526.966116,652.418278 530.547838,656 534.966116,656 C539.384394,656 542.966116,652.418278 542.966116,648 L542.966116,568 C542.966116,560.268014 549.234129,554 556.966116,554 C564.698102,554 570.966116,560.268014 570.966116,568 L570.966116,648 C570.966116,652.418278 574.547838,656 578.966116,656 C583.384394,656 586.966116,652.418278 586.966116,648 L586.966116,568 C586.966116,560.268014 593.234129,554 600.966116,554 C608.698102,554 614.966116,560.268014 614.966116,568 L614.966116,648 C614.966116,652.418278 618.547838,656 622.966116,656 C627.384394,656 630.966116,652.418278 630.966116,648 L630.966116,568 C630.966116,560.268014 637.234129,554 644.966116,554 C652.698102,554 658.966116,560.268014 658.966116,568 L658.966116,648 C658.966116,652.418278 662.547838,656 666.966116,656 C671.384394,656 674.966116,652.418278 674.966116,648 L674.966116,568 C674.966116,560.268014 681.234129,554 688.966116,554 C696.698102,554 702.966116,560.268014 702.966116,568 L702.966116,658 L696.966116,658 L696.966116,568 C696.966116,563.581722 693.384394,560 688.966116,560 C684.547838,560 680.966116,563.581722 680.966116,568 L680.966116,648 C680.966116,655.731986 674.698102,662 666.966116,662 C659.234129,662 652.966116,655.731986 652.966116,648 Z" id="path-31"></path>\n' +
'        <filter x="-0.7%" y="-1.4%" width="101.5%" height="102.8%" filterUnits="objectBoundingBox" id="filter-32">\n' +
'            <feMorphology radius="2" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>\n' +
'            <feGaussianBlur stdDeviation="0.5" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.262900424   0 0 0 0 0.372847131   0 0 0 0 0.775985054  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'        <path d="M463.966116,580.5 L463.966116,587.5 L90.4661157,587.5 C88.2569767,587.5 86.4661157,585.709139 86.4661157,583.5 L86.4661157,362 L93.4661157,362 L93.4661157,578.5 C93.4661157,579.604569 94.3615462,580.5 95.4661157,580.5 L463.966116,580.5 Z" id="path-33"></path>\n' +
'        <filter x="-0.7%" y="-1.1%" width="101.3%" height="102.2%" filterUnits="objectBoundingBox" id="filter-34">\n' +
'            <feGaussianBlur stdDeviation="2.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>\n' +
'            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>\n' +
'            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n' +
'            <feColorMatrix values="0 0 0 0 0.078769375   0 0 0 0 0.464787138   0 0 0 0 0.390552953  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n' +
'        </filter>\n' +
'    </defs>\n' +
'    <g id="工艺图" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
'        <g id="空压系统_螺杆空压机" transform="translate(-445.000000, -195.000000)">\n' +
'            <g id="螺杆空压机" transform="translate(445.000000, 196.000000)">\n' +
'                <g id="过滤" transform="translate(518.966116, 15.000000)" stroke="#586CB4">\n' +
'                    <path d="M12,28 L12,2 C12,0.8954305 12.8954305,2.02906125e-16 14,0 L36,0 C37.1045695,-2.02906125e-16 38,0.8954305 38,2 L38,28 L48,28 C49.1045695,28 50,28.8954305 50,30 L50,82 C50,83.1045695 49.1045695,84 48,84 L2,84 C0.8954305,84 1.3527075e-16,83.1045695 0,82 L0,30 C-1.3527075e-16,28.8954305 0.8954305,28 2,28 L12,28 Z" id="路径" fill="#FFFFFF"></path>\n' +
'                    <polyline id="路径-155" points="21 9 21 41 15 49"></polyline>\n' +
'                    <polyline id="路径-155复制" transform="translate(30.000000, 29.000000) scale(-1, 1) translate(-30.000000, -29.000000) " points="33 9 33 41 27 49"></polyline>\n' +
'                    <polyline id="路径-155复制-2" transform="translate(25.000000, 28.500000) scale(-1, 1) translate(-25.000000, -28.500000) " points="26 9 26 41 24 48"></polyline>\n' +
'                    <path d="M20,43 L23,49" id="路径-156"></path>\n' +
'                    <path d="M27,33 L24,36" id="路径-157"></path>\n' +
'                    <path d="M24,31 L22.5,34.5" id="路径-157复制"></path>\n' +
'                    <path d="M10.2819426,21 L39.7180574,21 C40.1638168,21 40.3254599,21.0464128 40.4884229,21.1335664 C40.6513858,21.2207199 40.7792801,21.3486142 40.8664336,21.5115771 C40.9535872,21.6745401 41,21.8361832 41,22.2819426 L41,23.7180574 C41,24.1638168 40.9535872,24.3254599 40.8664336,24.4884229 C40.7792801,24.6513858 40.6513858,24.7792801 40.4884229,24.8664336 C40.3254599,24.9535872 40.1638168,25 39.7180574,25 L10.2819426,25 C9.83618323,25 9.67454011,24.9535872 9.51157715,24.8664336 C9.34861419,24.7792801 9.2207199,24.6513858 9.13356635,24.4884229 C9.04641281,24.3254599 9,24.1638168 9,23.7180574 L9,22.2819426 C9,21.8361832 9.04641281,21.6745401 9.13356635,21.5115771 C9.2207199,21.3486142 9.34861419,21.2207199 9.51157715,21.1335664 C9.67454011,21.0464128 9.83618323,21 10.2819426,21 Z" id="矩形复制-114" fill="#DFE3F3"></path>\n' +
'                    <path d="M10.2819426,17 L39.7180574,17 C40.1638168,17 40.3254599,17.0464128 40.4884229,17.1335664 C40.6513858,17.2207199 40.7792801,17.3486142 40.8664336,17.5115771 C40.9535872,17.6745401 41,17.8361832 41,18.2819426 L41,19.7180574 C41,20.1638168 40.9535872,20.3254599 40.8664336,20.4884229 C40.7792801,20.6513858 40.6513858,20.7792801 40.4884229,20.8664336 C40.3254599,20.9535872 40.1638168,21 39.7180574,21 L10.2819426,21 C9.83618323,21 9.67454011,20.9535872 9.51157715,20.8664336 C9.34861419,20.7792801 9.2207199,20.6513858 9.13356635,20.4884229 C9.04641281,20.3254599 9,20.1638168 9,19.7180574 L9,18.2819426 C9,17.8361832 9.04641281,17.6745401 9.13356635,17.5115771 C9.2207199,17.3486142 9.34861419,17.2207199 9.51157715,17.1335664 C9.67454011,17.0464128 9.83618323,17 10.2819426,17 Z" id="矩形复制-115" fill="#DFE3F3"></path>\n' +
'                </g>\n' +
'                <g id="空气过滤器" transform="translate(28.000000, 0.000000)">\n' +
'                    <polygon id="矩形" stroke="#586CB4" fill-opacity="0.2" fill="#586CB4" points="0 0 130 0 130 88 0 88"></polygon>\n' +
'                    <polygon id="矩形复制-15" stroke="#586CB4" fill="#FFFFFF" points="4 4 126 4 126 84 4 84"></polygon>\n' +
'                    <path d="M4,8 L4,4 L12,4 L12,8 L4,8 Z M12,12 L12,8 L20,8 L20,12 L12,12 Z M20,8 L20,4 L28,4 L28,8 L20,8 Z M28,12 L28,8 L37,8 L37,12 L28,12 Z M37,8 L37,4 L45,4 L45,8 L37,8 Z M45,12 L45,8 L53,8 L53,12 L45,12 Z M53,8 L53,4 L61,4 L61,8 L53,8 Z M61,12 L61,8 L69,8 L69,12 L61,12 Z M69,8 L69,4 L77,4 L77,8 L69,8 Z M77,12 L77,8 L85,8 L85,12 L77,12 Z M85,8 L85,4 L93,4 L93,8 L85,8 Z M93,12 L93,8 L102,8 L102,12 L93,12 Z M102,8 L102,4 L110,4 L110,8 L102,8 Z M110,12 L110,8 L118,8 L118,12 L110,12 Z M118,8 L118,4 L126,4 L126,8 L118,8 Z" id="形状结合" fill="#586CB4" fill-rule="nonzero"></path>\n' +
'                    <path d="M4,16 L4,12 L12,12 L12,16 L4,16 Z M12,20 L12,16 L20,16 L20,20 L12,20 Z M20,16 L20,12 L28,12 L28,16 L20,16 Z M28,20 L28,16 L37,16 L37,20 L28,20 Z M37,16 L37,12 L45,12 L45,16 L37,16 Z M45,20 L45,16 L53,16 L53,20 L45,20 Z M53,16 L53,12 L61,12 L61,16 L53,16 Z M61,20 L61,16 L69,16 L69,20 L61,20 Z M69,16 L69,12 L77,12 L77,16 L69,16 Z M77,20 L77,16 L85,16 L85,20 L77,20 Z M85,16 L85,12 L93,12 L93,16 L85,16 Z M93,20 L93,16 L102,16 L102,20 L93,20 Z M102,16 L102,12 L110,12 L110,16 L102,16 Z M110,20 L110,16 L118,16 L118,20 L110,20 Z M118,16 L118,12 L126,12 L126,16 L118,16 Z" id="形状结合复制-2" fill="#586CB4" fill-rule="nonzero"></path>\n' +
'                    <path d="M4,24 L4,20 L12,20 L12,24 L4,24 Z M12,28 L12,24 L20,24 L20,28 L12,28 Z M20,24 L20,20 L28,20 L28,24 L20,24 Z M28,28 L28,24 L37,24 L37,28 L28,28 Z M37,24 L37,20 L45,20 L45,24 L37,24 Z M45,28 L45,24 L53,24 L53,28 L45,28 Z M53,24 L53,20 L61,20 L61,24 L53,24 Z M61,28 L61,24 L69,24 L69,28 L61,28 Z M69,24 L69,20 L77,20 L77,24 L69,24 Z M77,28 L77,24 L85,24 L85,28 L77,28 Z M85,24 L85,20 L93,20 L93,24 L85,24 Z M93,28 L93,24 L102,24 L102,28 L93,28 Z M102,24 L102,20 L110,20 L110,24 L102,24 Z M110,28 L110,24 L118,24 L118,28 L110,28 Z M118,24 L118,20 L126,20 L126,24 L118,24 Z" id="形状结合复制-3" fill="#586CB4" fill-rule="nonzero"></path>\n' +
'                    <path d="M4,32 L4,28 L12,28 L12,32 L4,32 Z M12,36 L12,32 L20,32 L20,36 L12,36 Z M20,32 L20,28 L28,28 L28,32 L20,32 Z M28,36 L28,32 L37,32 L37,36 L28,36 Z M37,32 L37,28 L45,28 L45,32 L37,32 Z M45,36 L45,32 L53,32 L53,36 L45,36 Z M53,32 L53,28 L61,28 L61,32 L53,32 Z M61,36 L61,32 L69,32 L69,36 L61,36 Z M69,32 L69,28 L77,28 L77,32 L69,32 Z M77,36 L77,32 L85,32 L85,36 L77,36 Z M85,32 L85,28 L93,28 L93,32 L85,32 Z M93,36 L93,32 L102,32 L102,36 L93,36 Z M102,32 L102,28 L110,28 L110,32 L102,32 Z M110,36 L110,32 L118,32 L118,36 L110,36 Z M118,32 L118,28 L126,28 L126,32 L118,32 Z" id="形状结合复制-4" fill="#586CB4" fill-rule="nonzero"></path>\n' +
'                    <path d="M4,40 L4,36 L12,36 L12,40 L4,40 Z M12,44 L12,40 L20,40 L20,44 L12,44 Z M20,40 L20,36 L28,36 L28,40 L20,40 Z M28,44 L28,40 L37,40 L37,44 L28,44 Z M37,40 L37,36 L45,36 L45,40 L37,40 Z M45,44 L45,40 L53,40 L53,44 L45,44 Z M53,40 L53,36 L61,36 L61,40 L53,40 Z M61,44 L61,40 L69,40 L69,44 L61,44 Z M69,40 L69,36 L77,36 L77,40 L69,40 Z M77,44 L77,40 L85,40 L85,44 L77,44 Z M85,40 L85,36 L93,36 L93,40 L85,40 Z M93,44 L93,40 L102,40 L102,44 L93,44 Z M102,40 L102,36 L110,36 L110,40 L102,40 Z M110,44 L110,40 L118,40 L118,44 L110,44 Z M118,40 L118,36 L126,36 L126,40 L118,40 Z" id="形状结合复制-5" fill="#586CB4" fill-rule="nonzero"></path>\n' +
'                    <path d="M4,48 L4,44 L12,44 L12,48 L4,48 Z M12,52 L12,48 L20,48 L20,52 L12,52 Z M20,48 L20,44 L28,44 L28,48 L20,48 Z M28,52 L28,48 L37,48 L37,52 L28,52 Z M37,48 L37,44 L45,44 L45,48 L37,48 Z M45,52 L45,48 L53,48 L53,52 L45,52 Z M53,48 L53,44 L61,44 L61,48 L53,48 Z M61,52 L61,48 L69,48 L69,52 L61,52 Z M69,48 L69,44 L77,44 L77,48 L69,48 Z M77,52 L77,48 L85,48 L85,52 L77,52 Z M85,48 L85,44 L93,44 L93,48 L85,48 Z M93,52 L93,48 L102,48 L102,52 L93,52 Z M102,48 L102,44 L110,44 L110,48 L102,48 Z M110,52 L110,48 L118,48 L118,52 L110,52 Z M118,48 L118,44 L126,44 L126,48 L118,48 Z" id="形状结合复制-6" fill="#586CB4" fill-rule="nonzero"></path>\n' +
'                    <path d="M4,56 L4,52 L12,52 L12,56 L4,56 Z M12,60 L12,56 L20,56 L20,60 L12,60 Z M20,56 L20,52 L28,52 L28,56 L20,56 Z M28,60 L28,56 L37,56 L37,60 L28,60 Z M37,56 L37,52 L45,52 L45,56 L37,56 Z M45,60 L45,56 L53,56 L53,60 L45,60 Z M53,56 L53,52 L61,52 L61,56 L53,56 Z M61,60 L61,56 L69,56 L69,60 L61,60 Z M69,56 L69,52 L77,52 L77,56 L69,56 Z M77,60 L77,56 L85,56 L85,60 L77,60 Z M85,56 L85,52 L93,52 L93,56 L85,56 Z M93,60 L93,56 L102,56 L102,60 L93,60 Z M102,56 L102,52 L110,52 L110,56 L102,56 Z M110,60 L110,56 L118,56 L118,60 L110,60 Z M118,56 L118,52 L126,52 L126,56 L118,56 Z" id="形状结合复制-7" fill="#586CB4" fill-rule="nonzero"></path>\n' +
'                    <path d="M4,64 L4,60 L12,60 L12,64 L4,64 Z M12,68 L12,64 L20,64 L20,68 L12,68 Z M20,64 L20,60 L28,60 L28,64 L20,64 Z M28,68 L28,64 L37,64 L37,68 L28,68 Z M37,64 L37,60 L45,60 L45,64 L37,64 Z M45,68 L45,64 L53,64 L53,68 L45,68 Z M53,64 L53,60 L61,60 L61,64 L53,64 Z M61,68 L61,64 L69,64 L69,68 L61,68 Z M69,64 L69,60 L77,60 L77,64 L69,64 Z M77,68 L77,64 L85,64 L85,68 L77,68 Z M85,64 L85,60 L93,60 L93,64 L85,64 Z M93,68 L93,64 L102,64 L102,68 L93,68 Z M102,64 L102,60 L110,60 L110,64 L102,64 Z M110,68 L110,64 L118,64 L118,68 L110,68 Z M118,64 L118,60 L126,60 L126,64 L118,64 Z" id="形状结合复制-8" fill="#586CB4" fill-rule="nonzero"></path>\n' +
'                    <path d="M4,72 L4,68 L12,68 L12,72 L4,72 Z M12,76 L12,72 L20,72 L20,76 L12,76 Z M20,72 L20,68 L28,68 L28,72 L20,72 Z M28,76 L28,72 L37,72 L37,76 L28,76 Z M37,72 L37,68 L45,68 L45,72 L37,72 Z M45,76 L45,72 L53,72 L53,76 L45,76 Z M53,72 L53,68 L61,68 L61,72 L53,72 Z M61,76 L61,72 L69,72 L69,76 L61,76 Z M69,72 L69,68 L77,68 L77,72 L69,72 Z M77,76 L77,72 L85,72 L85,76 L77,76 Z M85,72 L85,68 L93,68 L93,72 L85,72 Z M93,76 L93,72 L102,72 L102,76 L93,76 Z M102,72 L102,68 L110,68 L110,72 L102,72 Z M110,76 L110,72 L118,72 L118,76 L110,76 Z M118,72 L118,68 L126,68 L126,72 L118,72 Z" id="形状结合复制-9" fill="#586CB4" fill-rule="nonzero"></path>\n' +
'                    <path d="M4,80 L4,76 L12,76 L12,80 L4,80 Z M12,84 L12,80 L20,80 L20,84 L12,84 Z M20,80 L20,76 L28,76 L28,80 L20,80 Z M28,84 L28,80 L37,80 L37,84 L28,84 Z M37,80 L37,76 L45,76 L45,80 L37,80 Z M45,84 L45,80 L53,80 L53,84 L45,84 Z M53,80 L53,76 L61,76 L61,80 L53,80 Z M61,84 L61,80 L69,80 L69,84 L61,84 Z M69,80 L69,76 L77,76 L77,80 L69,80 Z M77,84 L77,80 L85,80 L85,84 L77,84 Z M85,80 L85,76 L93,76 L93,80 L85,80 Z M93,84 L93,80 L102,80 L102,84 L93,84 Z M102,80 L102,76 L110,76 L110,80 L102,80 Z M110,84 L110,80 L118,80 L118,84 L110,84 Z M118,80 L118,76 L126,76 L126,80 L118,80 Z" id="形状结合复制-10" fill="#586CB4" fill-rule="nonzero"></path>\n' +
'                </g>\n' +
'                <path d="M1117.96612,328.5 L1157.96612,328.5 C1158.79454,328.5 1159.46612,329.171573 1159.46612,330 L1159.46612,344 C1159.46612,344.828427 1158.79454,345.5 1157.96612,345.5 L1117.96612,345.5 C1117.13769,345.5 1116.46612,344.828427 1116.46612,344 L1116.46612,330 C1116.46612,329.171573 1117.13769,328.5 1117.96612,328.5 Z" id="矩形" stroke="#586CB4" fill="#FFFFFF"></path>\n' +
'                <path d="M1117.96612,406.5 L1157.96612,406.5 C1158.79454,406.5 1159.46612,407.171573 1159.46612,408 L1159.46612,422 C1159.46612,422.828427 1158.79454,423.5 1157.96612,423.5 L1117.96612,423.5 C1117.13769,423.5 1116.46612,422.828427 1116.46612,422 L1116.46612,408 C1116.46612,407.171573 1117.13769,406.5 1117.96612,406.5 Z" id="矩形-copy-158" stroke="#586CB4" fill="#FFFFFF"></path>\n' +
'                <path d="M1159.46612,332.5 L1162.96612,332.5 C1163.79454,332.5 1164.46612,333.171573 1164.46612,334 L1164.46612,340 C1164.46612,340.828427 1163.79454,341.5 1162.96612,341.5 L1159.46612,341.5 L1159.46612,332.5 Z" id="矩形-copy-157" stroke="#586CB4" fill="#F2F4FC"></path>\n' +
'                <path d="M1159.46612,410.5 L1162.96612,410.5 C1163.79454,410.5 1164.46612,411.171573 1164.46612,412 L1164.46612,418 C1164.46612,418.828427 1163.79454,419.5 1162.96612,419.5 L1159.46612,419.5 L1159.46612,410.5 Z" id="矩形-copy-159" stroke="#586CB4" fill="#F2F4FC"></path>\n' +
'                <path d="M1110.96612,348 L1152.96612,348 C1155.17525,348 1156.96612,349.790861 1156.96612,352 C1156.96612,354.209139 1155.17525,356 1152.96612,356 L1120.96612,356" id="形状" stroke="#FE9E0B" stroke-width="4"></path>\n' +
'                <path d="M1152.96612,364 L1120.96612,364 C1118.75698,364 1116.96612,362.209139 1116.96612,360 C1116.96612,357.790861 1118.75698,356 1120.96612,356 L1152.96612,356" id="形状" stroke="#FE9E0B" stroke-width="4"></path>\n' +
'                <path d="M1120.96612,364 L1152.96612,364 C1155.17525,364 1156.96612,365.790861 1156.96612,368 C1156.96612,370.209139 1155.17525,372 1152.96612,372 L1120.96612,372" id="形状" stroke="#FE9E0B" stroke-width="4"></path>\n' +
'                <path d="M1152.96612,380 L1120.96612,380 C1118.75698,380 1116.96612,378.209139 1116.96612,376 C1116.96612,373.790861 1118.75698,372 1120.96612,372 L1152.96612,372" id="形状" stroke="#FE9E0B" stroke-width="4"></path>\n' +
'                <path d="M1120.96612,380 L1152.96612,380 C1155.17525,380 1156.96612,381.790861 1156.96612,384 C1156.96612,386.209139 1155.17525,388 1152.96612,388 L1120.96612,388" id="形状" stroke="#FE9E0B" stroke-width="4"></path>\n' +
'                <path d="M1120.96612,396 L1152.96612,396 C1155.17525,396 1156.96612,397.790861 1156.96612,400 C1156.96612,402.209139 1155.17525,404 1152.96612,404 L1110.96612,404" id="形状-copy" stroke="#FE9E0B" stroke-width="4"></path>\n' +
'                <path d="M1152.96612,396 L1120.96612,396 C1118.75698,396 1116.96612,394.209139 1116.96612,392 C1116.96612,389.790861 1118.75698,388 1120.96612,388 L1152.96612,388" id="形状" stroke="#FE9E0B" stroke-width="4"></path>\n' +
'                <g id="路径-159" fill-rule="nonzero">\n' +
'                    <use fill="#FFD0BB" xlink:href="#path-1"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>\n' +
'                </g>\n' +
'                <g id="路径-161" fill-rule="nonzero">\n' +
'                    <use fill="#FFD0BB" xlink:href="#path-3"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>\n' +
'                </g>\n' +
'                <g id="路径-162" fill-rule="nonzero">\n' +
'                    <use fill="#FFD0BB" xlink:href="#path-5"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-6)" xlink:href="#path-5"></use>\n' +
'                </g>\n' +
'                <g id="路径-163" fill-rule="nonzero">\n' +
'                    <use fill="#FFD0BB" xlink:href="#path-7"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-8)" xlink:href="#path-7"></use>\n' +
'                </g>\n' +
'                <g id="路径-166" fill-rule="nonzero">\n' +
'                    <use fill="#FFD0BB" xlink:href="#path-9"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-10)" xlink:href="#path-9"></use>\n' +
'                </g>\n' +
'                <g id="路径-188" fill-rule="nonzero">\n' +
'                    <use fill="#ABBDFF" xlink:href="#path-11"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-12)" xlink:href="#path-11"></use>\n' +
'                </g>\n' +
'                <g id="合并形状" fill-rule="nonzero">\n' +
'                    <use fill="#ABBDFF" xlink:href="#path-13"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-14)" xlink:href="#path-13"></use>\n' +
'                </g>\n' +
'                <g id="路径-190" fill-rule="nonzero">\n' +
'                    <use fill="#ABBDFF" xlink:href="#path-15"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-16)" xlink:href="#path-15"></use>\n' +
'                </g>\n' +
'                <g id="路径-191" fill-rule="nonzero">\n' +
'                    <use fill="#ABBDFF" xlink:href="#path-17"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-18)" xlink:href="#path-17"></use>\n' +
'                </g>\n' +
'                <g id="路径-193" fill-rule="nonzero">\n' +
'                    <use fill="#98E6D7" xlink:href="#path-19"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-20)" xlink:href="#path-19"></use>\n' +
'                </g>\n' +
'                <g id="路径-194" fill-rule="nonzero">\n' +
'                    <use fill="#98E6D7" xlink:href="#path-21"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-22)" xlink:href="#path-21"></use>\n' +
'                </g>\n' +
'                <g id="路径-195" fill-rule="nonzero">\n' +
'                    <use fill="#98E6D7" xlink:href="#path-23"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-24)" xlink:href="#path-23"></use>\n' +
'                </g>\n' +
'                <g id="路径-196" fill-rule="nonzero">\n' +
'                    <use fill="#98E6D7" xlink:href="#path-25"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-26)" xlink:href="#path-25"></use>\n' +
'                </g>\n' +
'                <rect id="矩形" stroke="#586CB4" fill="#FFFFFF" x="515.5" y="369.5" width="171" height="152" rx="6"></rect>\n' +
'                <rect id="矩形-copy-9" stroke="#586CB4" fill="#F2F4FC" x="560.5" y="366.5" width="83" height="8" rx="4"></rect>\n' +
'                <path d="M516,480.042271 C521.496663,483.331579 525.891008,485.114878 529.183036,485.392166 C550.184127,487.161092 566.651642,479.074839 578.966116,480.042271 C568.851083,491.012656 547.862378,497.079904 516,498.244016 L516,480.042271 Z" id="路径-199" fill="#FDB27A"></path>\n' +
'                <g id="路径" fill-rule="nonzero">\n' +
'                    <use fill="#FFD0BB" xlink:href="#path-27"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-28)" xlink:href="#path-27"></use>\n' +
'                </g>\n' +
'                <g id="路径-179" fill-rule="nonzero">\n' +
'                    <use fill="#FFD0BB" xlink:href="#path-29"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-30)" xlink:href="#path-29"></use>\n' +
'                </g>\n' +
'                <path d="M583.939812,480.630664 C607.618586,490.11145 626.90376,492.305573 641.795335,487.213034 C641.68812,493.134377 630.488058,497.912466 608.195148,501.547299 L583.939812,480.630664 Z" id="路径-200" fill="#FDB27A"></path>\n' +
'                <path d="M516,487 C517.464996,492.040548 524.131663,493.781797 536,492.223747 C553.802505,489.886671 561.983,480.042271 580,480.042271 C598.017,480.042271 603.450997,506.982985 630.27631,492.223747 C648.159852,482.384255 666.734415,480.643006 686,487 L686,515 C686,518.313708 683.313708,521 680,521 L522,521 C518.686292,521 516,518.313708 516,515 L516,487 Z" id="矩形-copy-8" fill="#FF994D"></path>\n' +
'                <g id="分组-15" transform="translate(644.000000, 423.000000)">\n' +
'                    <g id="辅油泵" stroke="#586CB4">\n' +
'                        <path d="M26.6808511,38.6020489 L26.6808511,33.0413526 C24.1710234,34.7994861 21.1017146,35.8333333 17.787234,35.8333333 C9.30320023,35.8333333 2.42553191,29.0595674 2.42553191,20.7037037 C2.42553191,19.0049321 2.70980026,17.3715519 3.23404255,15.8471884 L3.23404255,4.39795114 C3.23404255,3.728159 2.69106874,3.18518519 2.0212766,3.18518519 L2.0212766,3.18518519 C1.30796564,3.18518519 0.685628589,2.70108261 0.510131075,2.00969767 L0.404255319,1.59259259 C0.23058303,0.908398254 0.644442923,0.212959946 1.32863726,0.0392876572 C1.43142207,0.0131973031 1.53705432,1.94800474e-17 1.64309876,0 L12.9100927,1.33226763e-15 C13.615985,1.20259732e-15 14.1882238,0.572238783 14.1882238,1.2781311 C14.1882238,1.38417553 14.1750265,1.48980779 14.1489362,1.59259259 L14.0430604,2.00969767 C13.8675629,2.70108261 13.2452258,3.18518519 12.5319149,3.18518519 L12.5319149,3.18518519 C11.8621228,3.18518519 11.3191489,3.728159 11.3191489,4.39795114 L11.3191489,6.97658495 C13.2850227,6.07654003 15.4765497,5.57407407 17.787234,5.57407407 C18.7973231,5.57407407 19.7846423,5.67009031 20.7402958,5.85336129 C21.613141,5.67036608 22.5185571,5.57407407 23.4468085,5.57407407 C30.591258,5.57407407 36.3829787,11.278298 36.3829787,18.3148148 C36.3829787,20.5544002 35.7962635,22.659021 34.7659574,24.4877151 L34.7659574,38.6020489 C34.7659574,39.271841 35.3089313,39.8148148 35.9787234,39.8148148 L35.9787234,39.8148148 C36.6920344,39.8148148 37.3143714,40.2989174 37.4898689,40.9903023 L37.5957447,41.4074074 C37.769417,42.0916017 37.3555571,42.7870401 36.6713627,42.9607123 C36.5685779,42.9868027 36.4629457,43 36.3569012,43 L25.0899073,43 C24.384015,43 23.8117762,42.4277612 23.8117762,41.7218689 C23.8117762,41.6158245 23.8249735,41.5101922 23.8510638,41.4074074 L23.9569396,40.9903023 C24.1324371,40.2989174 24.7547742,39.8148148 25.4680851,39.8148148 L25.4680851,39.8148148 C26.1378772,39.8148148 26.6808511,39.271841 26.6808511,38.6020489 Z" id="路径" fill-opacity="0.2" fill="#586CB4"></path>\n' +
'                        <circle id="椭圆形" fill="#F2F4FC" cx="17.787234" cy="20.7037037" r="11.5"></circle>\n' +
'                    </g>\n' +
'                    <g id="fsfyb" transform="translate(10.000000, 13.000000)" fill="#586CB4">\n' +
'                        <path d="M7.86652633,8 C5.86652633,5.77123617 4.86652633,4.1045695 4.86652633,3 C4.86652633,1.34314575 6.20967208,4.9471538e-13 7.86652633,4.9471538e-13 C9.52338058,4.9471538e-13 10.8665263,1.34314575 10.8665263,3 C10.8665263,4.1045695 9.86652633,5.77123617 7.86652633,8 Z M7.33062794,9 C6.40046185,11.8464327 5.45708617,13.5457915 4.50050093,14.0980762 C3.06562306,14.9265033 1.23085184,14.4348779 0.402424714,13 C-0.42600241,11.5651221 0.0656230554,9.73035091 1.50050093,8.90192379 C2.45708617,8.34963904 4.40046185,8.38233111 7.33062794,9 Z M8.40242471,9 C11.3325908,8.38233111 13.2759665,8.34963904 14.2325517,8.90192379 C15.6674296,9.73035091 16.1590551,11.5651221 15.3306279,13 C14.5022008,14.4348779 12.6674296,14.9265033 11.2325517,14.0980762 C10.2759665,13.5457915 9.33259081,11.8464327 8.40242471,9 Z" id="形状"></path>\n' +
'                    </g>\n' +
'                </g>\n' +
'                <g id="螺杆主机" transform="translate(678.966116, 206.000000)">\n' +
'                    <g transform="translate(0.000000, -0.000000)">\n' +
'                        <polygon id="矩形" stroke="#586CB4" fill="#EEF0F7" points="-4.97379915e-14 -2.84217094e-14 72 -2.84217094e-14 65 28.4366587 61 28.4366587 61 139 11 139 11 28.4366587 7 28.4366587"></polygon>\n' +
'                        <path d="M37.7947828,109.310501 C47.1823688,110.576178 51.8761617,111.619697 51.8761617,112.441059 C51.8761617,113.673101 49.9404789,114.328813 37.7947828,117.304145 C36.8931889,115.108715 36.8931889,112.444166 37.7947828,109.310501 Z" id="路径-154" fill="#8195DC"></path>\n' +
'                        <path d="M37.1185874,128.718117 C47.353323,130.193944 52.4706908,131.342538 52.4706908,132.1639 C52.4706908,133.395942 54.8044325,134.577512 42.6587364,137.552845 C34.5616057,139.5364 32.7148893,136.59149 37.1185874,128.718117 Z" id="路径-154-copy-4" fill="#8195DC"></path>\n' +
'                        <path d="M38.3055556,90.0821739 C46.9465099,91.3152964 51.2669871,92.3425384 51.2669871,93.1639 C51.2669871,94.3959423 50.4512516,95.3313189 38.3055556,98.3066514 C36.9792953,95.7462672 36.9792953,93.0047746 38.3055556,90.0821739 Z" id="路径-154-copy" fill="#8195DC"></path>\n' +
'                        <path d="M37.8740167,52 L50.5129056,55.0133261 C49.7975437,55.9685612 45.3912975,57.4379562 37.2941667,59.4215112 C34.7347083,58.1492119 34.9279916,55.6753748 37.8740167,52 Z" id="路径-154-copy-3" fill="#8195DC"></path>\n' +
'                        <path d="M37.8740167,70.0495711 C46.1800403,71.0377621 50.3330522,71.9425384 50.3330522,72.7639 C50.3330522,73.9959423 50.0197127,76.0522713 37.8740167,79.0276038 C35.6496086,79.3664719 35.6496086,76.3737944 37.8740167,70.0495711 Z" id="路径-154-copy-2" fill="#8195DC"></path>\n' +
'                        <path d="M20.5229404,60.2097654 C31.1743135,62.1222543 36.5,63.4891796 36.5,64.3105411 C36.5,65.1319027 31.7761653,66.7051656 22.328496,69.0303299 L20.5229404,60.2097654 Z" id="路径-154-copy-5" fill="#8195DC" transform="translate(28.511470, 64.620048) scale(-1, 1) translate(-28.511470, -64.620048) "></path>\n' +
'                        <path d="M22.6952988,79.8180757 C32.3643568,81.754289 37.1988859,83.1330764 37.1988859,83.954438 C37.1988859,85.1864803 34.3581655,86.0458422 22.2124694,89.0211748 C19.8089215,87.9980301 19.9698646,84.9303304 22.6952988,79.8180757 Z" id="路径-154-copy-6" fill="#8195DC" transform="translate(28.860913, 84.419625) scale(-1, 1) translate(-28.860913, -84.419625) "></path>\n' +
'                        <path d="M21.2375884,99.4569418 C30.9066465,101.230395 35.7411755,102.527802 35.7411755,103.349163 C35.7411755,104.581206 33.7153676,105.528593 21.5696715,108.503926 C20.2952538,105.090509 20.1845594,102.074848 21.2375884,99.4569418 Z" id="路径-154-copy-7" fill="#8195DC" transform="translate(28.132058, 103.980434) scale(-1, 1) translate(-28.132058, -103.980434) "></path>\n' +
'                        <path d="M23.894421,119.335704 C33.1058953,120.767139 37.7116325,121.893538 37.7116325,122.714899 C37.7116325,123.946942 35.3773099,125.742784 23.2316139,128.718117 C20.329913,126.183349 20.5508487,123.055878 23.894421,119.335704 Z" id="路径-154-copy-8" fill="#8195DC" transform="translate(29.460474, 124.026911) scale(-1, 1) translate(-29.460474, -124.026911) "></path>\n' +
'                        <path d="M36.8837699,52 C50.1706997,53.670071 53.9537083,55.2825928 48.2327959,56.8375655 C41.3500514,59.2290089 18.8501365,61.3619302 20.5229404,64.3105411 C22.1957443,67.2591521 41.0649374,68.973479 47.4481925,71.762496 C53.8314476,74.551513 47.2185707,76.7642847 41.6115149,78.5411112 C36.0044591,80.3179377 17.9799974,81.3807507 20.5229404,84.5897076 C23.0658834,87.7986644 43.2693814,90.0821739 48.2327959,91.4207095 C53.1962105,92.7592451 54.8751627,95.4868472 41.6115149,97.7332994 C28.3478671,99.9797515 16.3897794,101.816763 21.4268168,105.035295 C24.7848417,107.180983 31.5130744,108.668435 41.6115149,109.497651 C55.0705575,110.781598 56.0954427,112.987167 44.6861706,116.114357 C27.5722624,120.805143 15.5874661,121.841511 22.125107,124.788298 C28.6627478,127.735085 40.379736,128.579709 44.6861706,129.469965 C48.9926052,130.36022 57.9867185,133.898902 48.2327959,136.174079 C44.98912,136.930691 41.140118,137.402852 36.6857899,137.59056" id="路径-117" stroke="#586CB4" stroke-width="3"></path>\n' +
'                        <rect id="矩形" fill="#586CB4" x="33" y="11" width="6" height="132" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-7" stroke="#586CB4" fill="#FFFFFF" transform="translate(36.000000, 149.000000) scale(1, -1) translate(-36.000000, -149.000000) " x="20" y="146" width="32" height="6" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-10" stroke="#586CB4" fill="#FFFFFF" transform="translate(36.000000, 41.000000) scale(1, -1) translate(-36.000000, -41.000000) " x="20" y="38" width="32" height="6" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-8" stroke="#586CB4" fill="#DFE3F3" transform="translate(36.000000, 154.000000) scale(1, -1) translate(-36.000000, -154.000000) " x="26" y="152" width="20" height="4" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-11" stroke="#586CB4" fill="#DFE3F3" transform="translate(36.000000, 36.000000) scale(1, -1) translate(-36.000000, -36.000000) " x="26" y="34" width="20" height="4" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-9" stroke="#586CB4" fill="#DFE3F3" transform="translate(36.000000, 143.000000) scale(1, -1) translate(-36.000000, -143.000000) " x="29" y="140" width="14" height="6" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-12" stroke="#586CB4" fill="#DFE3F3" transform="translate(36.000000, 47.000000) scale(1, -1) translate(-36.000000, -47.000000) " x="29" y="44" width="14" height="6" rx="0.6"></rect>\n' +
'                    </g>\n' +
'                </g>\n' +
'                <g id="分组-14" transform="translate(83.000000, 117.000000)">\n' +
'                    <rect id="矩形" stroke="#586CB4" fill="#FFFFFF" x="0" y="20" width="20" height="6" rx="1"></rect>\n' +
'                    <path d="M5,12 L15,12 C15.5522847,12 16,12.4477153 16,13 L16,20 L4,20 L4,13 C4,12.4477153 4.44771525,12 5,12 Z" id="矩形-copy-154" stroke="#586CB4" fill="#F2F4FC"></path>\n' +
'                    <rect id="矩形-copy-156" fill="#586CB4" transform="translate(10.000000, 5.000000) rotate(-90.000000) translate(-10.000000, -5.000000) " x="9" y="-2" width="2" height="14" rx="1"></rect>\n' +
'                    <path d="M5,26 L15,26 L15,35 C15,35.5522847 14.5522847,36 14,36 L6,36 C5.44771525,36 5,35.5522847 5,35 L5,26 Z" id="矩形-copy-153" stroke="#586CB4" fill="#F2F4FC"></path>\n' +
'                    <polygon id="多边形" stroke="#586CB4" fill="#FFFFFF" points="10 27 13.4641016 29 13.4641016 33 10 35 6.53589838 33 6.53589838 29"></polygon>\n' +
'                    <circle id="椭圆形" fill="#586CB4" cx="10" cy="31" r="2"></circle>\n' +
'                    <path d="M9,0 L11,0 C11.5522847,-1.01453063e-16 12,0.44771525 12,1 L12,12 L8,12 L8,1 C8,0.44771525 8.44771525,1.01453063e-16 9,0 Z" id="矩形-copy-155" stroke="#586CB4" fill="#FFFFFF"></path>\n' +
'                </g>\n' +
'                <g id="螺杆主机" transform="translate(56.000000, 206.000000)">\n' +
'                    <g transform="translate(0.000000, -0.000000)">\n' +
'                        <polygon id="矩形" stroke="#586CB4" fill="#EEF0F7" points="-4.97379915e-14 -2.84217094e-14 72 -2.84217094e-14 65 28.4366587 61 28.4366587 61 139 11 139 11 28.4366587 7 28.4366587"></polygon>\n' +
'                        <path d="M37.7947828,109.310501 C47.1823688,110.576178 51.8761617,111.619697 51.8761617,112.441059 C51.8761617,113.673101 49.9404789,114.328813 37.7947828,117.304145 C36.8931889,115.108715 36.8931889,112.444166 37.7947828,109.310501 Z" id="路径-154" fill="#8195DC"></path>\n' +
'                        <path d="M37.1185874,128.718117 C47.353323,130.193944 52.4706908,131.342538 52.4706908,132.1639 C52.4706908,133.395942 54.8044325,134.577512 42.6587364,137.552845 C34.5616057,139.5364 32.7148893,136.59149 37.1185874,128.718117 Z" id="路径-154-copy-4" fill="#8195DC"></path>\n' +
'                        <path d="M38.3055556,90.0821739 C46.9465099,91.3152964 51.2669871,92.3425384 51.2669871,93.1639 C51.2669871,94.3959423 50.4512516,95.3313189 38.3055556,98.3066514 C36.9792953,95.7462672 36.9792953,93.0047746 38.3055556,90.0821739 Z" id="路径-154-copy" fill="#8195DC"></path>\n' +
'                        <path d="M37.8740167,52 L50.5129056,55.0133261 C49.7975437,55.9685612 45.3912975,57.4379562 37.2941667,59.4215112 C34.7347083,58.1492119 34.9279916,55.6753748 37.8740167,52 Z" id="路径-154-copy-3" fill="#8195DC"></path>\n' +
'                        <path d="M37.8740167,70.0495711 C46.1800403,71.0377621 50.3330522,71.9425384 50.3330522,72.7639 C50.3330522,73.9959423 50.0197127,76.0522713 37.8740167,79.0276038 C35.6496086,79.3664719 35.6496086,76.3737944 37.8740167,70.0495711 Z" id="路径-154-copy-2" fill="#8195DC"></path>\n' +
'                        <path d="M20.5229404,60.2097654 C31.1743135,62.1222543 36.5,63.4891796 36.5,64.3105411 C36.5,65.1319027 31.7761653,66.7051656 22.328496,69.0303299 L20.5229404,60.2097654 Z" id="路径-154-copy-5" fill="#8195DC" transform="translate(28.511470, 64.620048) scale(-1, 1) translate(-28.511470, -64.620048) "></path>\n' +
'                        <path d="M22.6952988,79.8180757 C32.3643568,81.754289 37.1988859,83.1330764 37.1988859,83.954438 C37.1988859,85.1864803 34.3581655,86.0458422 22.2124694,89.0211748 C19.8089215,87.9980301 19.9698646,84.9303304 22.6952988,79.8180757 Z" id="路径-154-copy-6" fill="#8195DC" transform="translate(28.860913, 84.419625) scale(-1, 1) translate(-28.860913, -84.419625) "></path>\n' +
'                        <path d="M21.2375884,99.4569418 C30.9066465,101.230395 35.7411755,102.527802 35.7411755,103.349163 C35.7411755,104.581206 33.7153676,105.528593 21.5696715,108.503926 C20.2952538,105.090509 20.1845594,102.074848 21.2375884,99.4569418 Z" id="路径-154-copy-7" fill="#8195DC" transform="translate(28.132058, 103.980434) scale(-1, 1) translate(-28.132058, -103.980434) "></path>\n' +
'                        <path d="M23.894421,119.335704 C33.1058953,120.767139 37.7116325,121.893538 37.7116325,122.714899 C37.7116325,123.946942 35.3773099,125.742784 23.2316139,128.718117 C20.329913,126.183349 20.5508487,123.055878 23.894421,119.335704 Z" id="路径-154-copy-8" fill="#8195DC" transform="translate(29.460474, 124.026911) scale(-1, 1) translate(-29.460474, -124.026911) "></path>\n' +
'                        <path d="M36.8837699,52 C50.1706997,53.670071 53.9537083,55.2825928 48.2327959,56.8375655 C41.3500514,59.2290089 18.8501365,61.3619302 20.5229404,64.3105411 C22.1957443,67.2591521 41.0649374,68.973479 47.4481925,71.762496 C53.8314476,74.551513 47.2185707,76.7642847 41.6115149,78.5411112 C36.0044591,80.3179377 17.9799974,81.3807507 20.5229404,84.5897076 C23.0658834,87.7986644 43.2693814,90.0821739 48.2327959,91.4207095 C53.1962105,92.7592451 54.8751627,95.4868472 41.6115149,97.7332994 C28.3478671,99.9797515 16.3897794,101.816763 21.4268168,105.035295 C24.7848417,107.180983 31.5130744,108.668435 41.6115149,109.497651 C55.0705575,110.781598 56.0954427,112.987167 44.6861706,116.114357 C27.5722624,120.805143 15.5874661,121.841511 22.125107,124.788298 C28.6627478,127.735085 40.379736,128.579709 44.6861706,129.469965 C48.9926052,130.36022 57.9867185,133.898902 48.2327959,136.174079 C44.98912,136.930691 41.140118,137.402852 36.6857899,137.59056" id="路径-117" stroke="#586CB4" stroke-width="3"></path>\n' +
'                        <rect id="矩形" fill="#586CB4" x="33" y="11" width="6" height="132" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-7" stroke="#586CB4" fill="#FFFFFF" transform="translate(36.000000, 149.000000) scale(1, -1) translate(-36.000000, -149.000000) " x="20" y="146" width="32" height="6" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-10" stroke="#586CB4" fill="#FFFFFF" transform="translate(36.000000, 41.000000) scale(1, -1) translate(-36.000000, -41.000000) " x="20" y="38" width="32" height="6" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-8" stroke="#586CB4" fill="#DFE3F3" transform="translate(36.000000, 154.000000) scale(1, -1) translate(-36.000000, -154.000000) " x="26" y="152" width="20" height="4" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-11" stroke="#586CB4" fill="#DFE3F3" transform="translate(36.000000, 36.000000) scale(1, -1) translate(-36.000000, -36.000000) " x="26" y="34" width="20" height="4" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-9" stroke="#586CB4" fill="#DFE3F3" transform="translate(36.000000, 143.000000) scale(1, -1) translate(-36.000000, -143.000000) " x="29" y="140" width="14" height="6" rx="0.6"></rect>\n' +
'                        <rect id="矩形-copy-12" stroke="#586CB4" fill="#DFE3F3" transform="translate(36.000000, 47.000000) scale(1, -1) translate(-36.000000, -47.000000) " x="29" y="44" width="14" height="6" rx="0.6"></rect>\n' +
'                    </g>\n' +
'                </g>\n' +
'                <circle id="椭圆形-copy" stroke="#586CB4" fill-opacity="0.1" fill="#586CB4" cx="602" cy="428" r="31"></circle>\n' +
'                <g id="分组-7" transform="translate(602.000000, 428.000000) rotate(-360.000000) translate(-602.000000, -428.000000) translate(581.000000, 407.000000)" fill="#586CB4">\n' +
'                    <path d="M21.0789117,19.3846154 C16.3241947,13.9841492 13.9468362,9.94568763 13.9468362,7.26923077 C13.9468362,3.25454547 17.1399751,4.54747351e-13 21.0789117,4.54747351e-13 C25.0178482,4.54747351e-13 28.2109871,3.25454547 28.2109871,7.26923077 C28.2109871,9.94568763 25.8336286,13.9841492 21.0789117,19.3846154 Z M19.8048891,21.8076923 C17.5935508,28.7048178 15.3508086,32.8224947 13.0766626,34.1607231 C9.66544349,36.1680658 5.30353456,34.9768195 3.3340663,31.5 C1.36459804,28.0231805 2.53336802,23.5773888 5.94458711,21.5700461 C8.21873317,20.2318177 12.8388338,20.3110331 19.8048891,21.8076923 Z M22.3529342,21.8076923 C29.3189895,20.3110331 33.9390901,20.2318177 36.2132362,21.5700461 C39.6244553,23.5773888 40.7932253,28.0231805 38.823757,31.5 C36.8542887,34.9768195 32.4923798,36.1680658 29.0811607,34.1607231 C26.8070147,32.8224947 24.5642725,28.7048178 22.3529342,21.8076923 Z" id="形状"></path>\n' +
'                </g>\n' +
'                <path d="M265.777778,375.5 L279.987692,375.5 C280.752016,375.5 281.394112,376.074704 281.478518,376.834353 L285.256296,410.834353 C285.34778,411.657713 284.754478,412.399341 283.931117,412.490826 C283.876113,412.496937 283.820813,412.5 283.76547,412.5 L262,412.5 C261.171573,412.5 260.5,411.828427 260.5,411 C260.5,410.944657 260.503063,410.889357 260.509174,410.834353 L264.286952,376.834353 C264.371358,376.074704 265.013454,375.5 265.777778,375.5 Z" id="矩形" stroke="#586CB4" fill="#FFFFFF"></path>\n' +
'                <g id="分组-2-copy-3" transform="translate(461.000000, 618.000000)">\n' +
'                    <rect id="矩形" stroke="#586CB4" fill="#F2F4FC" x="8.46611574" y="0.5" width="31" height="29"></rect>\n' +
'                    <ellipse id="椭圆形" stroke="#586CB4" fill="#D3D9ED" cx="8" cy="15" rx="7.5" ry="14.5"></ellipse>\n' +
'                    <path d="M7,12 L38,12 L38,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,14 C5,12.8954305 5.8954305,12 7,12 Z" id="矩形-copy-6" fill="#8195DC"></path>\n' +
'                </g>\n' +
'                <g id="分组-2-copy" transform="translate(721.500000, 584.000000) scale(-1, 1) translate(-721.500000, -584.000000) translate(702.000000, 569.000000)">\n' +
'                    <rect id="矩形" stroke="#586CB4" fill="#F2F4FC" x="8.46611574" y="0.5" width="31" height="29"></rect>\n' +
'                    <ellipse id="椭圆形" stroke="#586CB4" fill="#D3D9ED" cx="8" cy="15" rx="7.5" ry="14.5"></ellipse>\n' +
'                    <path d="M7,12 L38,12 L38,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,14 C5,12.8954305 5.8954305,12 7,12 Z" id="矩形-copy-6" fill="#8195DC"></path>\n' +
'                </g>\n' +
'                <g id="分组-2-copy-2" transform="translate(721.500000, 634.000000) scale(-1, 1) translate(-721.500000, -634.000000) translate(702.000000, 619.000000)">\n' +
'                    <rect id="矩形" stroke="#586CB4" fill="#F2F4FC" x="8.46611574" y="0.5" width="31" height="29"></rect>\n' +
'                    <ellipse id="椭圆形" stroke="#586CB4" fill="#D3D9ED" cx="8" cy="15" rx="7.5" ry="14.5"></ellipse>\n' +
'                    <path d="M7,12 L38,12 L38,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,14 C5,12.8954305 5.8954305,12 7,12 Z" id="矩形-copy-6" fill="#8195DC"></path>\n' +
'                </g>\n' +
'                <g id="合并形状" fill-rule="nonzero">\n' +
'                    <use fill="#ABBDFF" xlink:href="#path-31"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-32)" xlink:href="#path-31"></use>\n' +
'                </g>\n' +
'                <polyline id="路径-197" stroke="#586CB4" stroke-width="2" points="512.966116 570 512.966116 641.180411 534.966116 641.180411 534.966116 569 556.966116 569 556.966116 641.180411 578.966116 641.180411 578.966116 569 601 569 601 641.180411 623 641.180411 623 569 644.966116 569 644.966116 641.180411 666.966116 641.180411 666.966116 569 688.966116 569 688.966116 641.180411"></polyline>\n' +
'                <path d="M906.5,634.809017 L880.5,647.809017 L880.5,619.190983 L906.5,632.190983 L906.5,617.5 L913.5,617.5 L913.5,648.5 L906.5,648.5 L906.5,634.809017 Z" id="合并形状" stroke="#586CB4" fill="#FFFFFF"></path>\n' +
'                <path d="M4,351 L8,349 L8,355 L4,353 L4,355 L-2,352 L4,349 L4,351 Z" id="合并形状-copy-7" fill="#092692" fill-rule="nonzero" transform="translate(3.000000, 352.000000) rotate(-90.000000) translate(-3.000000, -352.000000) "></path>\n' +
'                <path d="M39,261 L43,259 L43,265 L39,263 L39,265 L33,262 L39,259 L39,261 Z" id="合并形状-copy-9" fill="#092692" fill-rule="nonzero"></path>\n' +
'                <path d="M130,704 L134,702 L134,708 L130,706 L130,708 L124,705 L130,702 L130,704 Z" id="合并形状-copy-10" fill="#092692" fill-rule="nonzero" transform="translate(129.000000, 705.000000) scale(-1, 1) translate(-129.000000, -705.000000) "></path>\n' +
'                <path d="M333,704 L337,702 L337,708 L333,706 L333,708 L327,705 L333,702 L333,704 Z" id="合并形状-copy-11" fill="#092692" fill-rule="nonzero" transform="translate(332.000000, 705.000000) scale(-1, 1) translate(-332.000000, -705.000000) "></path>\n' +
'                <path d="M849,704 L853,702 L853,708 L849,706 L849,708 L843,705 L849,702 L849,704 Z" id="合并形状-copy-16" fill="#092692" fill-rule="nonzero" transform="translate(848.000000, 705.000000) scale(-1, 1) translate(-848.000000, -705.000000) "></path>\n' +
'                <path d="M1107,704 L1111,702 L1111,708 L1107,706 L1107,708 L1101,705 L1107,702 L1107,704 Z" id="合并形状-copy-19" fill="#092692" fill-rule="nonzero" transform="translate(1106.000000, 705.000000) scale(-1, 1) translate(-1106.000000, -705.000000) "></path>\n' +
'                <path d="M486,671 L490,669 L490,675 L486,673 L486,675 L480,672 L486,669 L486,671 Z" id="合并形状-copy-12" fill="#092692" fill-rule="nonzero" transform="translate(485.000000, 672.000000) scale(-1, 1) rotate(-90.000000) translate(-485.000000, -672.000000) "></path>\n' +
'                <path d="M718,671 L722,669 L722,675 L718,673 L718,675 L712,672 L718,669 L718,671 Z" id="合并形状-copy-14" fill="#092692" fill-rule="nonzero" transform="translate(717.000000, 672.000000) scale(-1, -1) rotate(-90.000000) translate(-717.000000, -672.000000) "></path>\n' +
'                <path d="M1243,518 L1247,516 L1247,522 L1243,520 L1243,522 L1237,519 L1243,516 L1243,518 Z" id="合并形状-copy-17" fill="#092692" fill-rule="nonzero" transform="translate(1242.000000, 519.000000) scale(-1, -1) rotate(-90.000000) translate(-1242.000000, -519.000000) "></path>\n' +
'                <path d="M1161,124 L1165,122 L1165,128 L1161,126 L1161,128 L1155,125 L1161,122 L1161,124 Z" id="合并形状-copy-32" fill="#092692" fill-rule="nonzero" transform="translate(1160.000000, 125.000000) scale(-1, -1) rotate(-180.000000) translate(-1160.000000, -125.000000) "></path>\n' +
'                <path d="M837,124 L841,122 L841,128 L837,126 L837,128 L831,125 L837,122 L837,124 Z" id="合并形状-copy-35" fill="#092692" fill-rule="nonzero" transform="translate(836.000000, 125.000000) scale(-1, -1) rotate(-180.000000) translate(-836.000000, -125.000000) "></path>\n' +
'                <path d="M538,249 L542,247 L542,253 L538,251 L538,253 L532,250 L538,247 L538,249 Z" id="合并形状-copy-37" fill="#092692" fill-rule="nonzero" transform="translate(537.000000, 250.000000) scale(-1, -1) rotate(-180.000000) translate(-537.000000, -250.000000) "></path>\n' +
'                <path d="M240,249 L244,247 L244,253 L240,251 L240,253 L234,250 L240,247 L240,249 Z" id="合并形状-copy-38" fill="#092692" fill-rule="nonzero" transform="translate(239.000000, 250.000000) scale(-1, -1) rotate(-180.000000) translate(-239.000000, -250.000000) "></path>\n' +
'                <path d="M1200,336 L1204,334 L1204,340 L1200,338 L1200,340 L1194,337 L1200,334 L1200,336 Z" id="合并形状-copy-34" fill="#092692" fill-rule="nonzero" transform="translate(1199.000000, 337.000000) scale(1, -1) rotate(-180.000000) translate(-1199.000000, -337.000000) "></path>\n' +
'                <path d="M1200,414 L1204,412 L1204,418 L1200,416 L1200,418 L1194,415 L1200,412 L1200,414 Z" id="合并形状-copy-33" fill="#092692" fill-rule="nonzero" transform="translate(1199.000000, 415.000000) scale(-1, -1) rotate(-180.000000) translate(-1199.000000, -415.000000) "></path>\n' +
'                <path d="M1243,205 L1247,203 L1247,209 L1243,207 L1243,209 L1237,206 L1243,203 L1243,205 Z" id="合并形状-copy-30" fill="#092692" fill-rule="nonzero" transform="translate(1242.000000, 206.000000) scale(-1, -1) rotate(-90.000000) translate(-1242.000000, -206.000000) "></path>\n' +
'                <path d="M716,179 L720,177 L720,183 L716,181 L716,183 L710,180 L716,177 L716,179 Z" id="合并形状-copy-36" fill="#092692" fill-rule="nonzero" transform="translate(715.000000, 180.000000) scale(-1, 1) rotate(-90.000000) translate(-715.000000, -180.000000) "></path>\n' +
'                <path d="M1243,313 L1247,311 L1247,317 L1243,315 L1243,317 L1237,314 L1243,311 L1243,313 Z" id="合并形状-copy-31" fill="#092692" fill-rule="nonzero" transform="translate(1242.000000, 314.000000) scale(-1, -1) rotate(-90.000000) translate(-1242.000000, -314.000000) "></path>\n' +
'                <path d="M486,756 L490,754 L490,760 L486,758 L486,760 L480,757 L486,754 L486,756 Z" id="合并形状-copy-13" fill="#092692" fill-rule="nonzero" transform="translate(485.000000, 757.000000) scale(-1, 1) rotate(-90.000000) translate(-485.000000, -757.000000) "></path>\n' +
'                <path d="M718,756 L722,754 L722,760 L718,758 L718,760 L712,757 L718,754 L718,756 Z" id="合并形状-copy-15" fill="#092692" fill-rule="nonzero" transform="translate(717.000000, 757.000000) scale(-1, -1) rotate(-90.000000) translate(-717.000000, -757.000000) "></path>\n' +
'                <path d="M4,617 L8,615 L8,621 L4,619 L4,621 L-2,618 L4,615 L4,617 Z" id="合并形状-copy-8" fill="#092692" fill-rule="nonzero" transform="translate(3.000000, 618.000000) rotate(-90.000000) translate(-3.000000, -618.000000) "></path>\n' +
'                <path d="M1205,632 L1209,630 L1209,636 L1205,634 L1205,636 L1199,633 L1205,630 L1205,632 Z" id="合并形状-copy-20" fill="#0C7662" fill-rule="nonzero" transform="translate(1204.000000, 633.000000) scale(1, -1) rotate(-180.000000) translate(-1204.000000, -633.000000) "></path>\n' +
'                <path d="M373,632 L377,630 L377,636 L373,634 L373,636 L367,633 L373,630 L373,632 Z" id="合并形状-copy-21" fill="#0C7662" fill-rule="nonzero" transform="translate(372.000000, 633.000000) scale(1, -1) rotate(-180.000000) translate(-372.000000, -633.000000) "></path>\n' +
'                <g id="路径-192" fill-rule="nonzero">\n' +
'                    <use fill="#98E6D7" xlink:href="#path-33"></use>\n' +
'                    <use fill="black" fill-opacity="1" filter="url(#filter-34)" xlink:href="#path-33"></use>\n' +
'                </g>\n' +
'                <path d="M373,583 L377,581 L377,587 L373,585 L373,587 L367,584 L373,581 L373,583 Z" id="合并形状-copy-22" fill="#0C7662" fill-rule="nonzero" transform="translate(372.000000, 584.000000) scale(1, -1) rotate(-180.000000) translate(-372.000000, -584.000000) "></path>\n' +
'                <path d="M842,583 L846,581 L846,587 L842,585 L842,587 L836,584 L842,581 L842,583 Z" id="合并形状-copy-26" fill="#0C7662" fill-rule="nonzero" transform="translate(841.000000, 584.000000) scale(1, -1) rotate(-180.000000) translate(-841.000000, -584.000000) "></path>\n' +
'                <path d="M837,162 L841,160 L841,166 L837,164 L837,166 L831,163 L837,160 L837,162 Z" id="合并形状-copy-29" fill="#0C7662" fill-rule="nonzero" transform="translate(836.000000, 163.000000) scale(-1, -1) rotate(-180.000000) translate(-836.000000, -163.000000) "></path>\n' +
'                <path d="M91,508 L95,506 L95,512 L91,510 L91,512 L85,509 L91,506 L91,508 Z" id="合并形状-copy-23" fill="#0C7662" fill-rule="nonzero" transform="translate(90.000000, 509.000000) scale(1, -1) rotate(-270.000000) translate(-90.000000, -509.000000) "></path>\n' +
'                <path d="M954,518 L958,516 L958,522 L954,520 L954,522 L948,519 L954,516 L954,518 Z" id="合并形状-copy-27" fill="#0C7662" fill-rule="nonzero" transform="translate(953.000000, 519.000000) rotate(-270.000000) translate(-953.000000, -519.000000) "></path>\n' +
'                <path d="M954,280 L958,278 L958,284 L954,282 L954,284 L948,281 L954,278 L954,280 Z" id="合并形状-copy-28" fill="#0C7662" fill-rule="nonzero" transform="translate(953.000000, 281.000000) rotate(-270.000000) translate(-953.000000, -281.000000) "></path>\n' +
'                <path d="M91,406 L95,404 L95,410 L91,408 L91,410 L85,407 L91,404 L91,406 Z" id="合并形状-copy-24" fill="#0C7662" fill-rule="nonzero" transform="translate(90.000000, 407.000000) scale(1, -1) rotate(-270.000000) translate(-90.000000, -407.000000) "></path>\n' +
'                <path d="M275,348 L279,346 L279,352 L275,350 L275,352 L269,349 L275,346 L275,348 Z" id="合并形状-copy-25" fill="#0C7662" fill-rule="nonzero" transform="translate(274.000000, 349.000000) scale(1, -1) rotate(-270.000000) translate(-274.000000, -349.000000) "></path>\n' +
'                <g id="分组-2" transform="translate(461.000000, 569.000000)">\n' +
'                    <rect id="矩形" stroke="#586CB4" fill="#F2F4FC" x="8.46611574" y="0.5" width="31" height="29"></rect>\n' +
'                    <ellipse id="椭圆形" stroke="#586CB4" fill="#D3D9ED" cx="8" cy="15" rx="7.5" ry="14.5"></ellipse>\n' +
'                    <path d="M7,12 L38,12 L38,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,14 C5,12.8954305 5.8954305,12 7,12 Z" id="矩形-copy-6" fill="#8195DC"></path>\n' +
'                </g>\n' +
'                <path d="M849,403 L853,401 L853,407 L849,405 L849,407 L843,404 L849,401 L849,403 Z" id="合并形状-copy-34" fill="#B13701" fill-rule="nonzero" transform="translate(848.000000, 404.000000) scale(-1, 1) rotate(-360.000000) translate(-848.000000, -404.000000) "></path>\n' +
'                <path d="M387,174 L391,172 L391,178 L387,176 L387,178 L381,175 L387,172 L387,174 Z" id="合并形状-copy-48" fill="#B13701" fill-rule="nonzero" transform="translate(386.000000, 175.000000) rotate(-360.000000) translate(-386.000000, -175.000000) "></path>\n' +
'                <path d="M239,272 L243,270 L243,276 L239,274 L239,276 L233,273 L239,270 L239,272 Z" id="合并形状-copy-53" fill="#B13701" fill-rule="nonzero" transform="translate(238.000000, 273.000000) scale(-1, 1) rotate(-360.000000) translate(-238.000000, -273.000000) "></path>\n' +
'                <path d="M538,272 L542,270 L542,276 L538,274 L538,276 L532,273 L538,270 L538,272 Z" id="合并形状-copy-54" fill="#B13701" fill-rule="nonzero" transform="translate(537.000000, 273.000000) scale(-1, 1) rotate(-360.000000) translate(-537.000000, -273.000000) "></path>\n' +
'                <path d="M654,272 L658,270 L658,276 L654,274 L654,276 L648,273 L654,270 L654,272 Z" id="合并形状-copy-55" fill="#B13701" fill-rule="nonzero" transform="translate(653.000000, 273.000000) rotate(-360.000000) translate(-653.000000, -273.000000) "></path>\n' +
'                <path d="M180,174 L184,172 L184,178 L180,176 L180,178 L174,175 L180,172 L180,174 Z" id="合并形状-copy-50" fill="#B13701" fill-rule="nonzero" transform="translate(179.000000, 175.000000) rotate(-360.000000) translate(-179.000000, -175.000000) "></path>\n' +
'                <path d="M653,174 L657,172 L657,178 L653,176 L653,178 L647,175 L653,172 L653,174 Z" id="合并形状-copy-49" fill="#B13701" fill-rule="nonzero" transform="translate(652.000000, 175.000000) scale(-1, 1) rotate(-360.000000) translate(-652.000000, -175.000000) "></path>\n' +
'                <path d="M1029,280 L1033,278 L1033,284 L1029,282 L1029,284 L1023,281 L1029,278 L1029,280 Z" id="合并形状-copy-40" fill="#B13701" fill-rule="nonzero" transform="translate(1028.000000, 281.000000) scale(-1, 1) rotate(-270.000000) translate(-1028.000000, -281.000000) "></path>\n' +
'                <path d="M1029,143 L1033,141 L1033,147 L1029,145 L1029,147 L1023,144 L1029,141 L1029,143 Z" id="合并形状-copy-41" fill="#B13701" fill-rule="nonzero" transform="translate(1028.000000, 144.000000) scale(-1, 1) rotate(-270.000000) translate(-1028.000000, -144.000000) "></path>\n' +
'                <path d="M550,126 L554,124 L554,130 L550,128 L550,130 L544,127 L550,124 L550,126 Z" id="合并形状-copy-46" fill="#B13701" fill-rule="nonzero" transform="translate(549.000000, 127.000000) scale(-1, -1) rotate(-270.000000) translate(-549.000000, -127.000000) "></path>\n' +
'                <path d="M535,126 L539,124 L539,130 L535,128 L535,130 L529,127 L535,124 L535,126 Z" id="合并形状-copy-47" fill="#B13701" fill-rule="nonzero" transform="translate(534.000000, 127.000000) scale(-1, -1) rotate(-270.000000) translate(-534.000000, -127.000000) "></path>\n' +
'                <path d="M585,314 L589,312 L589,318 L585,316 L585,318 L579,315 L585,312 L585,314 Z" id="合并形状-copy-56" fill="#B13701" fill-rule="nonzero" transform="translate(584.000000, 315.000000) scale(-1, -1) rotate(-270.000000) translate(-584.000000, -315.000000) "></path>\n' +
'                <path d="M621,314 L625,312 L625,318 L621,316 L621,318 L615,315 L621,312 L621,314 Z" id="合并形状-copy-57" fill="#B13701" fill-rule="nonzero" transform="translate(620.000000, 315.000000) scale(-1, -1) rotate(-270.000000) translate(-620.000000, -315.000000) "></path>\n' +
'                <path d="M1047,403 L1051,401 L1051,407 L1047,405 L1047,407 L1041,404 L1047,401 L1047,403 Z" id="合并形状-copy-39" fill="#B13701" fill-rule="nonzero" transform="translate(1046.000000, 404.000000) scale(-1, 1) rotate(-360.000000) translate(-1046.000000, -404.000000) "></path>\n' +
'                <path d="M1087,346 L1091,344 L1091,350 L1087,348 L1087,350 L1081,347 L1087,344 L1087,346 Z" id="合并形状-copy-42" fill="#B13701" fill-rule="nonzero" transform="translate(1086.000000, 347.000000) rotate(-360.000000) translate(-1086.000000, -347.000000) "></path>\n' +
'                <path d="M814,80 L818,78 L818,84 L814,82 L814,84 L808,81 L814,78 L814,80 Z" id="合并形状-copy-43" fill="#B13701" fill-rule="nonzero" transform="translate(813.000000, 81.000000) rotate(-360.000000) translate(-813.000000, -81.000000) "></path>\n' +
'                <path d="M970,80 L974,78 L974,84 L970,82 L970,84 L964,81 L970,78 L970,80 Z" id="合并形状-copy-45" fill="#B13701" fill-rule="nonzero" transform="translate(969.000000, 81.000000) rotate(-360.000000) translate(-969.000000, -81.000000) "></path>\n' +
'                <path d="M649,80 L653,78 L653,84 L649,82 L649,84 L643,81 L649,78 L649,80 Z" id="合并形状-copy-44" fill="#B13701" fill-rule="nonzero" transform="translate(648.000000, 81.000000) rotate(-360.000000) translate(-648.000000, -81.000000) "></path>\n' +
'                <g id="冷却温差一级" transform="translate(1164.000000, 376.000000)">\n' +
'                    <rect id="Rectangle-4-Copy-7复制-31" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="52.48" y="0.48" width="49.04" height="23.04"></rect>\n' +
'                    <text id="冷却温差" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="12" font-weight="normal" line-spacing="10.56" letter-spacing="0.04615388" fill="#3D5278">\n' +
'                        <tspan x="0" y="20">冷却温差</tspan>\n' +
'                    </text>\n' +
'                    <text id="23℃" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                        <tspan x="57.9171874" y="18">23℃</tspan>\n' +
'                    </text>\n' +
'                </g>\n' +
'                <g id="冷却温差一级-copy-2" transform="translate(725.000000, 535.000000)">\n' +
'                    <rect id="Rectangle-4-Copy-7复制-31" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="88.48" y="182.48" width="49.04" height="23.04"></rect>\n' +
'                    <rect id="Rectangle-4-Copy-7复制-31-Copy" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="77.48" y="0.48" width="49.04" height="23.04"></rect>\n' +
'                    <text id="冷却水进水温度" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="12" font-weight="normal" line-spacing="10.56" letter-spacing="0.04615388" fill="#3D5278">\n' +
'                        <tspan x="0" y="202">冷却水进水温度</tspan>\n' +
'                    </text>\n' +
'                    <text id="中冷却器压力" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="12" font-weight="normal" line-spacing="10.56" letter-spacing="0.04615388" fill="#3D5278">\n' +
'                        <tspan x="0" y="20">中冷却器压力</tspan>\n' +
'                    </text>\n' +
'                    <text id="23℃" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                        <tspan x="93.9171874" y="200">23℃</tspan>\n' +
'                    </text>\n' +
'                    <text id="23℃-copy" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                        <tspan x="82.9171874" y="18">23℃</tspan>\n' +
'                    </text>\n' +
'                </g>\n' +
'                <g id="冷却温差一级-copy-5" transform="translate(335.000000, 717.000000)">\n' +
'                    <rect id="Rectangle-4-Copy-7复制-31" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="88.48" y="0.48" width="49.04" height="23.04"></rect>\n' +
'                    <text id="冷却水出水温度" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="12" font-weight="normal" line-spacing="10.56" letter-spacing="0.04615388" fill="#3D5278">\n' +
'                        <tspan x="0" y="20">冷却水出水温度</tspan>\n' +
'                    </text>\n' +
'                    <text id="23℃" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                        <tspan x="93.9171874" y="18">23℃</tspan>\n' +
'                    </text>\n' +
'                </g>\n' +
'                <g id="冷却温差一级-copy-6" transform="translate(12.000000, 618.000000)">\n' +
'                    <rect id="Rectangle-4-Copy-7复制-31" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="112.48" y="0.48" width="49.04" height="23.04"></rect>\n' +
'                    <text id="低压冷却水出水温度" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="12" font-weight="normal" line-spacing="10.56" letter-spacing="0.04615388" fill="#3D5278">\n' +
'                        <tspan x="0" y="20">低压冷却水出水温度</tspan>\n' +
'                    </text>\n' +
'                    <text id="23℃" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                        <tspan x="117.917187" y="18">23℃</tspan>\n' +
'                    </text>\n' +
'                </g>\n' +
'                <g id="冷却温差一级-copy-8" transform="translate(114.000000, 349.000000)">\n' +
'                    <rect id="Rectangle-4-Copy-7复制-31" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="100.48" y="0.48" width="49.04" height="23.04"></rect>\n' +
'                    <text id="低压主机出口温度" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="12" font-weight="normal" line-spacing="10.56" letter-spacing="0.04615388" fill="#3D5278">\n' +
'                        <tspan x="0" y="20">低压主机出口温度</tspan>\n' +
'                    </text>\n' +
'                    <text id="23℃" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                        <tspan x="105.917187" y="18">23℃</tspan>\n' +
'                    </text>\n' +
'                </g>\n' +
'                <g id="冷却温差一级-copy-3" transform="translate(1097.000000, 557.000000)">\n' +
'                    <rect id="Rectangle-4-Copy-7复制-31" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="57.48" y="0.48" width="49.04" height="23.04"></rect>\n' +
'                    <text id="出气压力" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="12" font-weight="normal" line-spacing="10.56" letter-spacing="0.04615388" fill="#3D5278">\n' +
'                        <tspan x="0" y="20">出气压力</tspan>\n' +
'                    </text>\n' +
'                    <text id="23℃" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                        <tspan x="62.9171874" y="18">23℃</tspan>\n' +
'                    </text>\n' +
'                </g>\n' +
'                <g id="冷却温差一级-copy-4" transform="translate(1097.000000, 587.000000)">\n' +
'                    <rect id="Rectangle-4-Copy-7复制-31" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="57.48" y="0.48" width="49.04" height="23.04"></rect>\n' +
'                    <text id="出气温度" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="12" font-weight="normal" line-spacing="10.56" letter-spacing="0.04615388" fill="#3D5278">\n' +
'                        <tspan x="0" y="20">出气温度</tspan>\n' +
'                    </text>\n' +
'                    <text id="23℃" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                        <tspan x="62.9171874" y="18">23℃</tspan>\n' +
'                    </text>\n' +
'                </g>\n' +
'                <g id="冷却温差一级-copy" transform="translate(1037.000000, 269.000000)">\n' +
'                    <rect id="Rectangle-4-Copy-7复制-31" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="28.48" y="0.48" width="49.04" height="23.04"></rect>\n' +
'                    <text id="油温" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="12" font-weight="normal" line-spacing="10.56" letter-spacing="0.04615388" fill="#3D5278">\n' +
'                        <tspan x="0" y="20">油温</tspan>\n' +
'                    </text>\n' +
'                    <text id="23℃" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                        <tspan x="33.9171874" y="18">23℃</tspan>\n' +
'                    </text>\n' +
'                </g>\n' +
'                <g id="冷却温差一级-copy-7" transform="translate(725.000000, 412.000000)">\n' +
'                    <rect id="Rectangle-4-Copy-7复制-31" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="28.48" y="0.48" width="49.04" height="23.04"></rect>\n' +
'                    <text id="油温" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="12" font-weight="normal" line-spacing="10.56" letter-spacing="0.04615388" fill="#3D5278">\n' +
'                        <tspan x="0" y="20">油温</tspan>\n' +
'                    </text>\n' +
'                    <text id="23℃" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                        <tspan x="33.9171874" y="18">23℃</tspan>\n' +
'                    </text>\n' +
'                </g>\n' +
'                <text id="油冷却器" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="14" font-weight="normal" letter-spacing="0.0538462" fill="#3D5278">\n' +
'                    <tspan x="1164" y="365">油冷却器</tspan>\n' +
'                </text>\n' +
'                <text id="高压级主机" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="14" font-weight="normal" letter-spacing="0.0538462" fill="#3D5278">\n' +
'                    <tspan x="751" y="244">高压级主机</tspan>\n' +
'                </text>\n' +
'                <text id="油过滤器" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="14" font-weight="normal" letter-spacing="0.0538462" fill="#3D5278">\n' +
'                    <tspan x="576" y="60">油过滤器</tspan>\n' +
'                </text>\n' +
'                <text id="加/卸载阀" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="14" font-weight="normal" letter-spacing="0.0538462" fill="#3D5278">\n' +
'                    <tspan x="109" y="144">加/卸载阀</tspan>\n' +
'                </text>\n' +
'                <text id="低压级主机" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="14" font-weight="normal" letter-spacing="0.0538462" fill="#3D5278">\n' +
'                    <tspan x="121" y="307">低压级主机</tspan>\n' +
'                </text>\n' +
'                <text id="至储气罐" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="14" font-weight="normal" letter-spacing="0.0538462" fill="#3D5278">\n' +
'                    <tspan x="1147" y="674">至储气罐</tspan>\n' +
'                </text>\n' +
'                <text id="单向阀" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="14" font-weight="normal" letter-spacing="0.0538462" fill="#3D5278">\n' +
'                    <tspan x="876" y="674">单向阀</tspan>\n' +
'                </text>\n' +
'                <rect id="Rectangle-4-Copy-7复制-30" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="867.48" y="173.48" width="49.04" height="23.04" rx="1.92"></rect>\n' +
'                <text id="高压主机进口温度" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="14" font-weight="normal" line-spacing="10.56" letter-spacing="0.0538462" fill="#3D5278">\n' +
'                    <tspan x="751" y="193">高压主机进口温度</tspan>\n' +
'                </text>\n' +
'                <text id="23℃" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                    <tspan x="871.917187" y="191">23℃</tspan>\n' +
'                </text>\n' +
'                <g id="空气过滤器压差" transform="translate(168.000000, 0.000000)">\n' +
'                    <rect id="Rectangle-4-Copy-7复制-31" stroke-opacity="0.289881993" stroke="#8A9FF4" stroke-width="0.96" fill-opacity="0.0795454545" fill="#8A9FF4" x="103.04" y="0.48" width="71.04" height="23.04"></rect>\n' +
'                    <text font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="14" font-weight="normal" line-spacing="10.56" letter-spacing="0.0538462" fill="#3D5278">\n' +
'                        <tspan x="0" y="20.76">空气过滤器压差</tspan>\n' +
'                    </text>\n' +
'                    <text id="0.0Bar" font-family="MicrosoftYaHeiUI, Microsoft YaHei UI" font-size="13" font-weight="normal" letter-spacing="0.05000004" fill="#27282B">\n' +
'                        <tspan x="111.044824" y="18">0.0bar</tspan>\n' +
'                    </text>\n' +
'                </g>\n' +
'                <path d="M387,230 L391,228 L391,234 L387,232 L387,234 L381,231 L387,228 L387,230 Z" id="合并形状-copy-51" fill="#0C7662" fill-rule="nonzero" transform="translate(386.000000, 231.000000) scale(-1, -1) rotate(-180.000000) translate(-386.000000, -231.000000) "></path>\n' +
'                <path d="M653,230 L657,228 L657,234 L653,232 L653,234 L647,231 L653,228 L653,230 Z" id="合并形状-copy-52" fill="#0C7662" fill-rule="nonzero" transform="translate(652.000000, 231.000000) scale(-1, -1) rotate(-180.000000) translate(-652.000000, -231.000000) "></path>\n' +
'            </g>\n' +
'        </g>\n' +
'    </g>'
export default svg
