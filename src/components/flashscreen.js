import React from 'react';

function FlashScreen() {

  return (
    <div className="splash-screen-wrapper">
        <svg className="splash-logo-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="640" height="640">
            <defs>
                <path className="dolphin-path" d="M59.29 133.48C63.25 135.54 67.57 136.79 72.02 137.16C78.83 137.72 91.69 138.77 98.3 139.32C103.46 139.74 108.56 140.75 113.49 142.33C123.51 145.54 131.94 148.24 138.41 150.32C155.11 155.67 170.88 163.56 185.18 173.72C195.16 180.82 216.5 195.99 229.73 205.4C233.26 207.91 236.08 211.29 237.91 215.22C240.37 220.5 245.02 230.5 247.49 235.82C249.29 239.68 251.52 243.33 254.14 246.69C256.13 249.25 256.38 249.58 257.93 251.57C262.04 256.85 266.7 261.68 271.82 265.98C274.01 267.81 266.71 261.69 267.35 262.23C277.61 270.82 288.67 278.4 300.39 284.84C302.75 286.15 301.72 285.58 306.46 288.19C309.53 289.87 313.38 288.52 314.72 285.29C315.28 283.94 316.68 280.56 318.91 275.15C321.94 268.59 323.84 264.49 324.59 262.84C327.46 256.63 328.63 249.77 328 242.96C327.86 241.47 328.14 244.47 327.93 242.24C327.62 239 330.68 236.46 333.82 237.37C344.92 240.56 360.06 244.93 368.25 247.29C382.26 251.33 395.86 256.67 408.87 263.23C417.58 267.63 433.38 275.59 444.39 281.15C449.74 283.85 454.8 287.08 459.5 290.79C464.52 294.77 467.12 296.83 470.79 299.73C479.96 306.99 488.22 315.36 495.36 324.63C498.01 328.08 499.7 330.27 503.47 335.17C506.9 339.62 509.86 344.42 512.29 349.48C514.08 353.2 514.19 353.42 515.58 356.3C519.35 364.13 522.45 372.27 524.84 380.62C526 384.66 524.85 380.64 525.75 383.78C529 395.1 530.65 406.82 530.65 418.6C530.65 420.05 530.65 419.34 530.65 423.97C530.65 423.97 530.47 427.73 530.47 427.73C530.06 432.07 530.12 431.39 529.99 432.78C528.94 443.85 526.5 454.74 522.72 465.2C521.56 468.42 523.07 464.24 521.74 467.93C518.54 476.8 514.59 485.39 509.93 493.59C508.6 495.93 511.33 491.12 509.93 493.59C505.56 501.29 499.37 507.81 491.91 512.58C490.16 513.7 494.38 511 492.16 512.42C486.34 516.13 479.41 517.71 472.56 516.88C463.67 515.79 454.66 513.98 445.53 511.43C437.42 509.16 429.16 506.25 420.76 502.69C412.06 499 402.26 498.87 393.46 502.33C393.08 502.48 396.93 500.97 394.36 501.97C393.21 502.43 393.07 504.01 394.13 504.66C402.77 509.93 411.59 515.31 416.6 518.36C430.28 526.7 442.04 537.84 451.11 551.05C454.12 555.42 449.08 548.09 452.02 552.36C461.29 565.86 467.09 581.43 468.9 597.7C469.29 601.23 469.55 603.52 470.4 611.17C470.53 612.33 472.11 612.58 472.58 611.51C477.06 601.42 486.98 579.06 491.01 569.99C493.65 564.05 496.96 558.43 500.88 553.25C503.61 549.63 507.56 544.42 510.7 540.26C510.7 540.26 518.74 530.29 518.74 530.29C523.91 524.25 525.72 522.13 528.51 518.87C539.2 506.38 548.48 492.76 556.19 478.24C559.72 471.59 560.59 469.95 564.59 462.42C570.73 450.84 575.3 438.5 578.18 425.72C579.76 418.69 578.48 424.36 579.64 419.21C583.93 400.15 586.47 380.74 587.22 361.21C587.37 357.29 586.99 367.08 587.22 361.21C587.72 348.15 587.11 335.06 585.4 322.1C584.9 318.36 585.91 326 585.4 322.1C583.75 309.69 580.69 297.51 576.27 285.8C575.24 283.08 577.69 289.57 576.38 286.1C576.38 286.1 563.96 259.15 563.96 259.15C560.09 252.1 558.34 248.92 555.15 243.11C548.12 230.32 540.08 218.11 531.1 206.61C525.09 198.91 517.53 189.21 510.76 180.55C504.3 172.27 497.21 164.5 489.56 157.31C482.88 151.03 469.5 138.46 461.61 131.05C458.18 127.83 456.5 123.18 457.08 118.51C457.99 111.29 459.22 101.39 459.99 95.25C461.05 86.75 463.64 78.51 467.61 70.92C469.4 67.5 468.35 69.51 470.03 66.29C474.32 58.12 480.62 51.16 488.33 46.1C490.33 44.79 485.98 47.64 488.33 46.1C492.18 43.58 491.2 37.7 486.75 36.55C480.63 34.97 481.4 35.17 477.17 34.08C463.2 30.47 448.89 28.38 434.47 27.83C431.6 27.73 435.68 27.88 430.57 27.69C423.63 27.43 416.68 28.15 409.95 29.85C408.31 30.26 413.24 29.02 411.53 29.45C405.03 31.08 398.73 33.39 392.71 36.32C391.38 36.96 396.04 34.69 394.61 35.39C388.97 38.13 383.85 41.84 379.49 46.34C376.32 49.6 374.77 51.2 371.94 54.11C366.9 59.31 359.26 61.01 352.49 58.45C346.08 56.03 336.58 52.44 329.81 49.88C323.57 47.52 317.17 45.63 310.65 44.23C303.15 42.61 301.47 42.25 296.73 41.22C281.06 37.84 265.08 36.14 249.05 36.14C244.22 36.14 248.63 36.14 242.49 36.14C230.77 36.14 219.08 37.31 207.59 39.65C206.17 39.94 216.21 37.9 214.05 38.34C205.02 40.18 196.13 42.67 187.47 45.8C185.29 46.59 188.93 45.27 186.05 46.32C179.75 48.59 173.78 51.67 168.28 55.48C162.86 59.23 158.97 61.92 154.57 64.97C145.69 71.11 137.7 78.45 130.8 86.76C128.25 89.83 124.55 94.3 120.38 99.32C118.88 101.14 116.81 102.39 114.5 102.89C102.56 105.46 74.73 111.44 63.89 113.77C58.34 114.97 53.96 119.25 52.65 124.78C52.43 125.71 53.31 122.01 52.93 123.58C52.11 127.02 53.74 130.58 56.88 132.22C58.56 133.1 57.74 132.67 59.29 133.48Z" id="o5qPllXEH">
                </path>
            </defs>
            <g><g><g><g>
                <use href="#o5qPllXEH" opacity="1" fill-opacity="0" stroke-width="20" >
                </use>
            </g></g></g></g>
        </svg>
        <h1 className="splash-title">Word&#305;ngo</h1>
    </div>
  );

} export default FlashScreen