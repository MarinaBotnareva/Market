function Header () {
  const headerElem = document.createElement('header');
  const nav = document.createElement('ul')
  nav.classList.add("nav-list")
  const menu = [
    `<svg width="189" height="39" viewBox="0 0 189 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 0C30.27 0 39 8.73004 39 19.5C39 30.27 30.27 39 19.5 39C8.73004 39 0 30.27 0 19.5C0 8.73004 8.73004 0 19.5 0Z" fill="#FBD051"/>
    <path d="M12.1077 30.6361H9.0546C8.70385 30.6361 8.5596 30.454 8.68103 30.1063L15.1438 11.6346H11.0454C10.7349 11.6346 10.5779 11.4888 10.5779 11.198V8.83094C10.5779 8.51963 10.7341 8.36379 11.0454 8.36379C16.6821 8.36379 22.3185 8.36379 27.9552 8.36379C28.2673 8.36379 28.4223 8.52041 28.4223 8.83094V11.198C28.4223 11.488 28.2665 11.6346 27.9552 11.6346H23.8634L30.3261 30.1063C30.4298 30.4598 30.3052 30.6361 29.9522 30.6361H26.8991C26.6087 30.6361 26.4319 30.512 26.3693 30.2626L24.8433 25.559H14.1638L12.6375 30.2626C12.5574 30.5112 12.3765 30.6361 12.1077 30.6361ZM32.8177 15.2527C34.7277 14.5052 36.8245 14.1316 39.1084 14.1316C41.267 14.1316 43.0006 14.7024 44.3081 15.8444C45.6164 16.9863 46.2703 18.6882 46.2703 20.9513V24.3768C46.2703 26.3908 45.6264 27.9995 44.3394 29.2037C43.0525 30.4076 41.4024 31.0097 39.3884 31.0097C38.2468 31.0097 37.1462 30.7815 36.0874 30.3248V36.0857C36.0874 36.397 35.9315 36.5528 35.6202 36.5528H32.9422C32.6309 36.5528 32.4755 36.397 32.4755 36.0857V15.7512C32.4755 15.5017 32.5896 15.3358 32.8177 15.2527ZM39.0771 27.8336C41.4229 27.8336 42.5958 26.6913 42.5958 24.4081V20.9207C42.5958 19.633 42.2949 18.7095 41.6932 18.1488C41.0911 17.5884 40.1981 17.3077 39.0148 17.3077C37.7688 17.3077 36.7931 17.4531 36.0874 17.7439V26.9616C36.9385 27.5428 37.9347 27.8336 39.0771 27.8336ZM62.9925 30.6361H59.8474C59.5775 30.6361 59.3907 30.5425 59.2867 30.3562L54.4292 23.9719L53.1522 25.342V30.169C53.1522 30.4803 52.996 30.6361 52.6847 30.6361H50.1003C49.789 30.6361 49.6335 30.4803 49.6335 30.169V14.9727C49.6335 14.6614 49.789 14.5052 50.1003 14.5052H52.6847C52.996 14.5052 53.1522 14.6614 53.1522 14.9727V20.9822L58.7263 14.7542C58.8505 14.5883 59.0376 14.5052 59.2867 14.5052H62.4322C62.6391 14.5052 62.7694 14.557 62.8212 14.6614C62.873 14.765 62.8371 14.8996 62.7122 15.0655L56.8268 21.4498L63.3038 30.0758C63.532 30.4494 63.4284 30.6361 62.9925 30.6361ZM78.3443 24.7194C78.3443 26.6503 77.7012 28.1813 76.4142 29.3124C75.1264 30.4443 73.4032 31.0097 71.245 31.0097C69.0856 31.0097 67.3624 30.4443 66.0754 29.3124C64.7884 28.1813 64.1446 26.6503 64.1446 24.7194V20.5468C64.1446 18.5954 64.7884 17.0381 66.0754 15.8753C67.3624 14.7132 69.0856 14.1316 71.245 14.1316C73.4032 14.1316 75.1264 14.7132 76.4142 15.8753C77.7012 17.0381 78.3443 18.5954 78.3443 20.5468V24.7194ZM67.7882 24.7194C67.7882 26.7539 68.9402 27.7714 71.245 27.7714C72.3661 27.7714 73.2223 27.5119 73.8135 26.9925C74.4056 26.4736 74.701 25.7156 74.701 24.7194V20.5468C74.701 19.5294 74.4002 18.7455 73.7985 18.1952C73.1964 17.6457 72.3448 17.3703 71.245 17.3703C70.1239 17.3703 69.2673 17.6403 68.6753 18.1801C68.084 18.7196 67.7882 19.5089 67.7882 20.5468V24.7194ZM85.5994 30.6361H82.7659C82.4751 30.6361 82.3297 30.4803 82.3297 30.169V8.83751C82.3297 8.52621 82.4751 8.37075 82.7659 8.37075H86.1601C86.4092 8.37075 86.5751 8.48522 86.6582 8.71338L90.4573 15.7825C91.2462 17.2559 92.1286 19.0835 93.1043 21.263H93.2285C94.2045 19.0835 95.087 17.2559 95.8755 15.7825L99.6436 8.71338C99.7682 8.48522 99.9445 8.37075 100.173 8.37075H103.536C103.848 8.37075 104.003 8.52621 104.003 8.83751V30.169C104.003 30.4803 103.848 30.6361 103.536 30.6361H100.702C100.412 30.6361 100.266 30.4803 100.266 30.169V23.9096C100.266 21.4602 100.349 18.2006 100.515 14.1316L100.422 14.1003C99.7991 15.4499 98.8652 17.3703 97.6192 19.8611L94.8793 25.1866C94.7753 25.4151 94.5994 25.5292 94.3495 25.5292H91.9832C91.7338 25.5292 91.5579 25.4151 91.4538 25.1866L88.7136 19.8611C87.468 17.3703 86.5341 15.4499 85.9107 14.1003L85.8179 14.1316C85.9838 18.2006 86.0665 21.4602 86.0665 23.9096V30.169C86.0665 30.4803 85.9107 30.6361 85.5994 30.6361ZM121.598 20.5159V23.6606C121.598 23.9514 121.441 24.0968 121.13 24.0968H111.664V24.9681C111.664 25.9028 111.96 26.6135 112.551 27.1016C113.143 27.5896 113.947 27.8336 114.965 27.8336C116.48 27.8336 117.944 27.3556 119.356 26.4012C119.604 26.2346 119.812 26.2659 119.978 26.4941L121.255 28.2072C121.463 28.4357 121.432 28.6535 121.162 28.8611C119.356 30.2935 117.248 31.0097 114.84 31.0097C112.93 31.0097 111.316 30.4853 109.998 29.4373C108.68 28.3886 108.021 26.8893 108.021 24.9375V20.5159C108.021 18.3769 108.685 16.7787 110.014 15.7198C111.342 14.6614 112.961 14.1316 114.871 14.1316C116.76 14.1316 118.354 14.6614 119.651 15.7198C120.949 16.7787 121.598 18.3769 121.598 20.5159ZM118.079 20.4845C118.079 19.4044 117.778 18.6055 117.176 18.0865C116.574 17.5672 115.806 17.3077 114.871 17.3077C112.733 17.3077 111.664 18.3665 111.664 20.4845V21.2935H118.079V20.4845ZM128.323 16.0625C129.404 15.5435 130.607 15.284 131.936 15.284C133.908 15.284 135.507 15.8393 136.731 16.95C137.956 18.0606 138.569 19.633 138.569 21.6675V24.4391C138.569 26.619 137.899 28.259 136.56 29.3592C135.221 30.4594 133.555 31.0097 131.562 31.0097C129.632 31.0097 128.007 30.4544 126.689 29.3437C125.37 28.2331 124.711 26.5876 124.711 24.4081V15.0036C124.711 13.0937 125.339 11.5886 126.595 10.4884C127.852 9.3878 129.341 8.67161 131.064 8.33981C133.535 7.9036 135.102 7.51921 135.766 7.18741C136.057 7.0625 136.264 7.11509 136.389 7.34325L137.541 9.30466C137.666 9.59547 137.613 9.80313 137.385 9.92804C136.659 10.343 134.977 10.8515 132.341 11.4532C131.759 11.5986 131.271 11.744 130.877 11.8894C130.483 12.0349 130.067 12.2425 129.632 12.5121C129.195 12.7824 128.868 13.1354 128.651 13.5713C128.432 14.0071 128.323 14.5261 128.323 15.1282V16.0625ZM131.531 27.7714C132.507 27.7714 133.311 27.5011 133.944 26.9616C134.577 26.4217 134.894 25.5915 134.894 24.4704V21.7297C134.894 19.4876 133.794 18.3665 131.593 18.3665C130.368 18.3665 129.279 18.6159 128.323 19.114V24.4391C128.323 25.581 128.625 26.4217 129.227 26.9616C129.829 27.5011 130.597 27.7714 131.531 27.7714ZM155.01 20.5159V23.6606C155.01 23.9514 154.855 24.0968 154.543 24.0968H145.077V24.9681C145.077 25.9028 145.373 26.6135 145.964 27.1016C146.556 27.5896 147.36 27.8336 148.378 27.8336C149.893 27.8336 151.356 27.3556 152.768 26.4012C153.017 26.2346 153.225 26.2659 153.391 26.4941L154.668 28.2072C154.876 28.4357 154.845 28.6535 154.575 28.8611C152.768 30.2935 150.661 31.0097 148.253 31.0097C146.343 31.0097 144.729 30.4853 143.411 29.4373C142.092 28.3886 141.433 26.8893 141.433 24.9375V20.5159C141.433 18.3769 142.098 16.7787 143.426 15.7198C144.755 14.6614 146.374 14.1316 148.284 14.1316C150.173 14.1316 151.767 14.6614 153.065 15.7198C154.362 16.7787 155.01 18.3769 155.01 20.5159ZM151.492 20.4845C151.492 19.4044 151.191 18.6055 150.588 18.0865C149.987 17.5672 149.219 17.3077 148.284 17.3077C146.146 17.3077 145.077 18.3665 145.077 20.4845V21.2935H151.492V20.4845ZM162.826 25.342C162.432 27.3147 161.83 28.6999 161.02 29.4996C160.211 30.2989 158.924 30.7297 157.159 30.792C156.868 30.792 156.723 30.6361 156.723 30.3248V28.0513C156.723 27.7814 156.868 27.6155 157.159 27.5529C157.761 27.5119 158.233 27.2628 158.576 26.8057C158.918 26.349 159.204 25.5292 159.432 24.3455C159.785 22.2905 160.045 19.1558 160.211 14.9414C160.252 14.6506 160.407 14.5052 160.678 14.5052H171.265C171.577 14.5052 171.733 14.6506 171.733 14.9414V30.169C171.733 30.4803 171.577 30.6361 171.265 30.6361H168.587C168.276 30.6361 168.12 30.4803 168.12 30.169V17.6816H163.574C163.47 20.6504 163.221 23.2039 162.826 25.342ZM182.569 30.6361H176.123C175.811 30.6361 175.656 30.4803 175.656 30.169V14.9414C175.656 14.6506 175.811 14.5052 176.123 14.5052H178.801C179.112 14.5052 179.268 14.6506 179.268 14.9414V19.737H182.569C184.479 19.737 186.021 20.225 187.194 21.2007C188.366 22.1764 188.953 23.526 188.953 25.2488C188.953 27.0962 188.387 28.4562 187.255 29.3283C186.124 30.1999 184.562 30.6361 182.569 30.6361ZM179.268 22.6954V27.6465H181.946C184.188 27.6465 185.309 26.8266 185.309 25.1866C185.33 24.3358 185.06 23.707 184.5 23.3029C183.939 22.898 183.088 22.6954 181.946 22.6954H179.268ZM18.6435 11.6346L15.2227 22.1629H23.7841L20.364 11.6346H18.6435Z" fill="black"/>
    </svg>`,
     `<form id="search">
    <input type="text" name="inputText">
    <button type="submit" class="submitBtn">
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.7713 20.4917C19.588 20.4917 19.4048 20.4218 19.2649 20.2818L10.8273 11.8426C10.5475 11.5627 10.5475 11.1094 10.8273 10.8295C11.1071 10.5497 11.5603 10.5497 11.8401 10.8295L20.2777 19.2688C20.5575 19.5487 20.5575 20.002 20.2777 20.2818C20.1378 20.4218 19.9546 20.4917 19.7713 20.4917Z" fill="#A8D1E7"/>
    <path d="M7.11454 13.7972C5.40366 13.7972 3.69207 13.1456 2.38967 11.8426C-0.215828 9.23655 -0.215828 4.99662 2.38967 2.3906C3.6515 1.12817 5.32951 0.43277 7.11454 0.43277C8.90027 0.43277 10.5783 1.12817 11.8401 2.3906C14.4456 4.99662 14.4456 9.23655 11.8401 11.8426C10.5377 13.1456 8.82613 13.7972 7.11454 13.7972ZM7.11454 1.86555C5.71282 1.86555 4.39433 2.41159 3.40249 3.40363C1.35587 5.45101 1.35587 8.78216 3.40249 10.8295C5.44982 12.8773 8.78136 12.8759 10.8273 10.8295C12.8739 8.78216 12.8739 5.45101 10.8273 3.40363C9.83545 2.41159 8.51697 1.86555 7.11454 1.86555Z" fill="#A8D1E7"/>
    </svg>       
    </button>  `,
     `<p><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M12.8958 19C14.435 18.9998 15.8115 18.4836 16.8763 17.4187L18.4314 15.8638C19.2069 15.0879 19.2069 13.8253 18.4312 13.0498L16.0684 10.687C15.6642 10.2825 15.1061 10.0726 14.5342 10.108C13.9636 10.1446 13.4358 10.4252 13.0864 10.8776L11.5539 12.8621C10.4392 12.2637 9.39867 11.4848 8.45685 10.5428C7.51984 9.6058 6.74375 8.57103 6.14674 7.46374L8.1363 5.92742C8.58869 5.57818 8.86932 5.05068 8.9059 4.48023C8.94252 3.90963 8.7316 3.35028 8.32711 2.94579L5.96451 0.582976C5.5887 0.206958 5.089 0 4.55729 0C4.02579 0 3.52611 0.206947 3.15049 0.582976L1.91362 1.81942C1.78598 1.92781 1.67989 2.0249 1.58133 2.12325C-1.299 5.00315 -0.165453 10.1595 4.33712 14.6618C7.17513 17.5 10.2724 18.9997 12.8956 18.9997L12.8958 19ZM2.52937 3.07221C2.616 2.98579 2.70723 2.90481 2.80014 2.82676C2.81458 2.81442 2.8286 2.80165 2.8422 2.78805L4.09895 1.53152C4.22136 1.40889 4.38415 1.34152 4.5572 1.34152C4.73046 1.34152 4.89325 1.40889 5.01588 1.53152L7.37848 3.89433C7.51219 4.02825 7.57935 4.2059 7.56721 4.39443C7.55508 4.58296 7.46594 4.75036 7.31633 4.86608L5.05872 6.60933C4.70383 6.88344 4.59231 7.37143 4.79339 7.77025C5.47285 9.11758 6.38617 10.3695 7.50799 11.4913C8.63478 12.6183 9.89362 13.535 11.2498 14.2157C11.6478 14.4153 12.1351 14.3038 12.4086 13.9498L14.1477 11.6976C14.2632 11.548 14.4308 11.4589 14.6193 11.4469C14.8085 11.4331 14.9855 11.502 15.1192 11.6355L17.482 13.9983C17.7348 14.2511 17.7346 14.6626 17.482 14.9154L15.9271 16.4703C13.6051 18.7917 9.22904 17.6587 5.28486 13.7143C1.34137 9.76976 0.208099 5.39366 2.52945 3.07204L2.52937 3.07221Z" fill="#1D1818"/>
     </svg>15438484844</p><button>Заказать звонок</button>`,
    `<a><svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.1238 19H0.863994C0.635375 19 0.416074 18.9096 0.254131 18.7487C0.0921879 18.5877 0.000804998 18.3693 0 18.1413L0 15.0222C0 13.2518 0.705144 11.5539 1.96031 10.3021C3.21547 9.05026 4.91784 8.34698 6.69291 8.34698H10.3071C12.0822 8.34698 13.7845 9.05026 15.0397 10.3021C16.2949 11.5539 17 13.2518 17 15.0222V18.1413C16.9996 18.2552 16.9766 18.368 16.9322 18.473C16.8879 18.578 16.8231 18.6731 16.7416 18.753C16.6601 18.8328 16.5635 18.8958 16.4575 18.9382C16.3515 18.9806 16.2381 19.0016 16.1238 19ZM1.72799 17.2948H15.272V15.0222C15.2712 13.7088 14.748 12.4495 13.8171 11.5206C12.8863 10.5916 11.6239 10.069 10.3071 10.0674H6.69291C5.3761 10.069 4.11373 10.5916 3.18289 11.5206C2.25204 12.4495 1.72879 13.7088 1.72799 15.0222V17.2948Z" fill="#1D1818"/>
    <path d="M8.54871 9.679C7.58406 9.68199 6.64027 9.39904 5.83716 8.86608C5.03404 8.33312 4.40781 7.57418 4.03797 6.6856C3.66813 5.79702 3.57135 4.81887 3.75993 3.87534C3.9485 2.9318 4.41392 2.06542 5.09711 1.38619C5.78029 0.706949 6.65042 0.245484 7.59705 0.0603732C8.54368 -0.124738 9.52412 -0.0251475 10.4139 0.346502C11.3037 0.718152 12.0627 1.3451 12.5945 2.14776C13.1264 2.95042 13.4071 3.89259 13.4011 4.85467C13.3931 6.13432 12.8788 7.35906 11.9701 8.26251C11.0614 9.16596 9.83178 9.67503 8.54871 9.679ZM8.54871 1.7234C7.93068 1.7234 7.32651 1.90603 6.81248 2.24823C6.29845 2.59044 5.89759 3.07686 5.66053 3.6461C5.42347 4.21534 5.36083 4.84187 5.48052 5.44659C5.60021 6.05131 5.89686 6.6071 6.33302 7.0438C6.76919 7.4805 7.3253 7.77852 7.93115 7.90024C8.53701 8.02196 9.16544 7.96192 9.73711 7.7277C10.3088 7.49348 10.7981 7.09558 11.1432 6.58424C11.4883 6.0729 11.6737 5.47105 11.6761 4.85467C11.6773 4.44415 11.5973 4.03742 11.4407 3.65777C11.2842 3.27812 11.054 2.93299 10.7635 2.64215C10.4731 2.3513 10.1279 2.12045 9.74786 1.9628C9.36781 1.80515 8.96032 1.72379 8.54871 1.7234Z" fill="#1D1818"/>
    </svg>
    Войти</a>`,
    `<a><svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 19C10.7925 19.0044 10.5889 18.9191 10.4163 18.7554L1.70152 9.99543C-0.566195 7.71112 -0.566195 3.99652 1.70152 1.70392C2.91951 0.551949 4.35661 -0.0426701 5.81959 1.05619e-05C7.28349 -0.0389963 8.72066 0.559995 9.93765 1.71635L11 2.78181L12.0624 1.71635C14.333 -0.567958 18.0279 -0.567958 20.2985 1.71635C22.5691 4.00067 22.5691 7.71112 20.2985 10.0079L11.5866 18.7554C11.4129 18.9191 11.2084 19.0044 11 19ZM5.81959 1.65831C4.77154 1.63537 3.74374 2.06945 2.87477 2.90204C1.24914 4.53547 1.24914 7.1929 2.87477 8.82633L11 16.9976L19.1282 8.81803C20.7509 7.18461 20.7509 4.52718 19.1282 2.89375C17.5054 1.26032 14.8612 1.24374 13.2327 2.90204L11.5866 4.56034C11.4126 4.71975 11.21 4.80453 11.0029 4.80453C10.7959 4.80453 10.5932 4.71975 10.4192 4.56034L8.75564 2.90204C7.88905 2.07213 6.86463 1.63818 5.81959 1.65831Z" fill="#1D1818"/>
    </svg>
    Избранное</a>`,
     `<a><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M18.4295 16.4758H10.6657C10.0984 16.4797 9.54508 16.2976 9.0887 15.9567C8.63232 15.6159 8.29742 15.1347 8.13417 14.5852L4.40978 2.38318C4.34711 2.17722 4.22052 1.99716 4.04874 1.86966C3.87697 1.74216 3.66915 1.67401 3.45608 1.6753H0.831214C0.722442 1.67549 0.614697 1.65402 0.514131 1.6121C0.413565 1.57019 0.322147 1.50865 0.245098 1.431C0.0894898 1.27419 0.00185288 1.06128 0.00146613 0.83912C0.00107938 0.61696 0.0879745 0.403744 0.243036 0.246377C0.398097 0.0890092 0.608622 0.000381396 0.828298 -9.73071e-06H3.45316C4.02098 -0.00451714 4.57494 0.177314 5.03191 0.518199C5.48888 0.859085 5.82422 1.34064 5.98761 1.89061L6.74882 4.38588H21.3314C21.7718 4.38639 22.2052 4.49773 22.5925 4.70987C22.9797 4.92201 23.3087 5.22829 23.5497 5.60108C23.7908 5.97387 23.9363 6.40147 23.9731 6.84531C24.01 7.28916 23.937 7.73531 23.7609 8.14353L20.8443 14.8713C20.6384 15.3463 20.3007 15.7507 19.872 16.0355C19.4434 16.3203 18.9423 16.4733 18.4295 16.4758ZM7.26505 6.06119L9.71492 14.0927C9.77692 14.2987 9.90286 14.479 10.0741 14.6071C10.2453 14.7351 10.4528 14.8039 10.6657 14.8035H18.4295C18.6216 14.8045 18.81 14.7494 18.972 14.6448C19.1339 14.5401 19.2625 14.3904 19.3423 14.2136L22.2588 7.4858C22.3253 7.33255 22.3529 7.16494 22.3392 6.99817C22.3255 6.8314 22.2708 6.67074 22.1801 6.53073C22.0895 6.39073 21.9657 6.27582 21.8201 6.1964C21.6744 6.11698 21.5115 6.07558 21.346 6.07594L7.26505 6.06119Z" fill="#1D1818"/>
     <path d="M10.727 24C10.1997 24 9.68436 23.8419 9.24599 23.5457C8.80762 23.2495 8.46595 22.8284 8.26419 22.3358C8.06243 21.8432 8.00964 21.3012 8.1125 20.7782C8.21536 20.2553 8.46924 19.775 8.84204 19.3979C9.21485 19.0209 9.68983 18.7642 10.2069 18.6601C10.724 18.5561 11.26 18.6095 11.7471 18.8135C12.2342 19.0176 12.6505 19.3631 12.9434 19.8064C13.2363 20.2498 13.3927 20.771 13.3927 21.3042C13.3919 22.0189 13.1108 22.7042 12.6111 23.2096C12.1113 23.715 11.4337 23.9992 10.727 24ZM10.727 20.2836C10.5274 20.2836 10.3323 20.3435 10.1663 20.4556C10.0004 20.5678 9.87105 20.7272 9.79467 20.9136C9.7183 21.1001 9.69831 21.3053 9.73725 21.5033C9.77619 21.7012 9.8723 21.8831 10.0134 22.0258C10.1546 22.1685 10.3344 22.2657 10.5301 22.3051C10.7259 22.3445 10.9288 22.3243 11.1131 22.247C11.2975 22.1698 11.4551 22.039 11.566 21.8711C11.6769 21.7033 11.7361 21.506 11.7361 21.3042C11.7353 21.0338 11.6288 20.7746 11.4397 20.5834C11.2506 20.3922 10.9944 20.2844 10.727 20.2836Z" fill="#1D1818"/>
     <path d="M18.2135 24C17.6863 24 17.1709 23.8419 16.7326 23.5457C16.2942 23.2495 15.9525 22.8284 15.7508 22.3358C15.549 21.8432 15.4962 21.3012 15.5991 20.7782C15.7019 20.2553 15.9558 19.775 16.3286 19.3979C16.7014 19.0209 17.1764 18.7642 17.6935 18.6601C18.2106 18.5561 18.7466 18.6095 19.2337 18.8135C19.7208 19.0176 20.1371 19.3631 20.43 19.8064C20.7229 20.2498 20.8792 20.771 20.8792 21.3042C20.8785 22.0189 20.5974 22.7042 20.0976 23.2096C19.5979 23.715 18.9203 23.9992 18.2135 24ZM18.2135 20.2836C18.014 20.2836 17.8189 20.3435 17.6529 20.4556C17.487 20.5678 17.3576 20.7272 17.2812 20.9136C17.2049 21.1001 17.1849 21.3053 17.2238 21.5033C17.2628 21.7012 17.3589 21.8831 17.5 22.0258C17.6411 22.1685 17.8209 22.2657 18.0167 22.3051C18.2124 22.3445 18.4153 22.3243 18.5997 22.247C18.7841 22.1698 18.9417 22.039 19.0526 21.8711C19.1635 21.7033 19.2227 21.506 19.2227 21.3042C19.2219 21.0338 19.1153 20.7746 18.9262 20.5834C18.7372 20.3922 18.4809 20.2844 18.2135 20.2836Z" fill="#1D1818"/>
     </svg>
     Корзина</a>`
  ]

  menu.forEach(element => {
    let item = document.createElement('li');
    item.innerHTML = element;
    item.classList.add("nav-item")
    nav.append(item)    
  });

  headerElem.append(nav);  // logo, search, phone, buttons

  return headerElem;
}

