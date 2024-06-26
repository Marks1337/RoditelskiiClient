import React, { useState} from 'react';
import styles from './Footer.module.css'
import { Link } from "react-router-dom"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer>
      <div className="block">
          <div className={styles.container}>
            <div className={styles.logo}>
              <Link onClick={scrollToTop}>
                <img src='img/logo.png'></img>
              </Link>
            </div>
            <div className={styles.information}>
              <span className={styles.politics}>Политика конфиденциальности <br/>
              © RodRodnik, 2024</span>
              <address className={styles.addressContainer}>
                <div className={styles.address}>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5643 0.0643883C8.87684 0.550716 4.76942 3.09954 2.27332 7.0722C-1.26574 12.7031 -0.597772 20.1796 3.87879 25.0488C6.36903 27.7558 9.45106 29.3671 13.1542 29.8945C13.8514 29.9941 16.1542 29.9882 16.8749 29.8886C20.5194 29.3847 23.6014 27.7792 26.0858 25.0839C28.1307 22.8691 29.4374 20.0331 29.8944 16.8456C29.994 16.1542 29.994 13.8456 29.8944 13.1542C29.5487 10.7167 28.7753 8.64837 27.4921 6.71478C26.953 5.89447 26.4081 5.2265 25.6464 4.45892C23.3085 2.09173 20.4139 0.632748 17.08 0.14056C16.3593 0.0350914 14.2792 -0.0117836 13.5643 0.0643883ZM15.9667 7.17767C18.1757 7.53509 20.0448 9.12884 20.7304 11.2499C20.9003 11.7597 21.035 12.58 21.035 13.0605C21.0292 14.5195 19.9218 16.916 17.8065 20.039C16.2128 22.3945 15.8495 22.7929 15.2636 22.8867C14.537 22.9921 14.1386 22.7636 13.4413 21.8144C11.5429 19.2597 9.83191 16.3417 9.31629 14.8007C8.95301 13.7109 8.89441 13.1191 9.05262 12.1581C9.58582 8.87689 12.6854 6.64447 15.9667 7.17767Z" fill="black"/>
              <path d="M14.3613 10.4648C13.7871 10.6699 13.3945 11.0273 13.1426 11.5723C13.002 11.8711 12.9785 12 12.9785 12.4219C12.9785 12.8672 13.002 12.9668 13.1719 13.3125C13.3945 13.7637 13.7109 14.0742 14.1738 14.2852C14.6426 14.5078 15.3574 14.5078 15.8262 14.2852C16.2891 14.0742 16.6055 13.7637 16.8281 13.3125C16.998 12.9668 17.0215 12.8672 17.0215 12.4219C17.0215 12.0059 16.998 11.8711 16.8633 11.5898C16.5117 10.8398 15.8965 10.4238 15.0879 10.3887C14.7598 10.377 14.543 10.4004 14.3613 10.4648Z" fill="black"/>
                  </svg>
                  <CopyToClipboard text={'Село Ивановка, \nЦентральная улица, 31'}>
                    <a  className={styles.text} >Село Ивановка, <br/>
                    Центральная улица, 31</a>
                  </CopyToClipboard>
                </div>
                <div className={styles.tel}>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.6348 0.0643997C11.7305 0.24604 10.043 0.732368 8.32616 1.58784C6.80272 2.3437 5.68944 3.14643 4.42967 4.38276C3.2285 5.57221 2.36131 6.77338 1.58788 8.32612C-0.246107 12.0058 -0.492201 16.1777 0.884752 20.0683C1.40038 21.5097 2.42577 23.3261 3.36327 24.4628C4.77538 26.1621 6.39842 27.4511 8.32616 28.4121C10.6113 29.5488 13.043 30.082 15.5273 29.9824C17.7598 29.8886 19.6992 29.3964 21.6738 28.4121C24.0527 27.2343 26.0273 25.4882 27.5098 23.2617C28.0195 22.4941 28.7812 20.9941 29.0918 20.1328C30.1172 17.332 30.2637 14.1093 29.5019 11.2089C29.2148 10.1191 28.9629 9.45112 28.418 8.34956C27.6562 6.80854 26.8535 5.6894 25.6172 4.42963C22.5058 1.27729 18.0176 -0.357475 13.6348 0.0643997ZM9.82616 7.20698C10.0137 7.27729 12.8555 10.0839 12.9844 10.3242C13.1836 10.705 13.1426 10.7753 12.0762 11.8593C11.5371 12.4101 11.0449 12.9492 10.9922 13.0488C10.7695 13.4882 10.8164 14.0097 11.1152 14.4609C12.0937 15.914 14.6719 18.4042 15.8613 19.0429C16.1308 19.1894 16.664 19.2011 16.9805 19.0722C17.1152 19.0136 17.5723 18.6093 18.164 18.0175C19.1426 17.0449 19.2949 16.9394 19.6172 17.0214C19.8164 17.0683 22.6933 19.916 22.8281 20.2031C23.0039 20.5781 22.8047 20.8945 21.873 21.7089C20.8769 22.582 19.7695 22.9511 18.6328 22.7929C17.1035 22.582 14.5898 21.3398 12.7734 19.8867C12.0937 19.3417 10.4297 17.6718 9.89061 16.9921C8.67186 15.4628 7.61717 13.5117 7.23046 12.0996C6.98436 11.1914 7.08983 10.2421 7.541 9.31635C7.7871 8.81831 7.88671 8.68354 8.57225 7.98627C8.98827 7.55854 9.38671 7.20112 9.45702 7.1894C9.52147 7.17768 9.59764 7.1601 9.62108 7.15424C9.64452 7.15424 9.73241 7.17768 9.82616 7.20698Z" fill="black"/>
                  </svg>
                  <CopyToClipboard text={'+7(929)796-31-77'}>
                  <a href="tel:+79297963177" className={styles.text}  >+7(929)796-31-77</a>
                  </CopyToClipboard>
                </div>
                <div className={styles.email}>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5644 0.0644531C8.87695 0.550781 4.76952 3.09961 2.27343 7.07227C-0.580086 11.6074 -0.750008 17.4844 1.83398 22.1777C3.00585 24.3105 4.68749 26.1387 6.76171 27.5273C8.15624 28.459 10.2773 29.3496 11.8945 29.6719C13.1484 29.9238 13.623 29.9707 15 29.9707C16.3828 29.9707 16.9512 29.9121 18.1172 29.6719C23.2676 28.5996 27.5859 24.7324 29.2324 19.7168C29.7773 18.0645 29.9707 16.8281 29.9707 15C29.9707 13.2363 29.7832 11.9941 29.291 10.459C28.5644 8.17383 27.3574 6.19336 25.6465 4.45898C23.3086 2.0918 20.4141 0.632812 17.0801 0.140625C16.3594 0.0351562 14.2793 -0.0117188 13.5644 0.0644531ZM22.7812 8.16797C23.4375 8.34375 23.9766 8.80078 24.2812 9.43359L24.4629 9.81445V15V20.1855L24.3047 20.5254C24 21.1699 23.5195 21.5918 22.8633 21.7969C22.5 21.9082 22.2891 21.9141 15 21.9141C7.6582 21.9141 7.50585 21.9141 7.13085 21.7969C6.50976 21.6035 6.03515 21.1934 5.70702 20.5664L5.5371 20.2441V15V9.75586L5.70702 9.43359C6.02929 8.81836 6.50976 8.39648 7.10741 8.20898C7.45898 8.09766 7.69921 8.0918 14.9707 8.0918C21.2226 8.08594 22.5234 8.10352 22.7812 8.16797Z" fill="black"/>
              <path d="M8.17969 9.7207C8.40235 9.92578 14.959 14.9414 15 14.9414C15.0469 14.9414 21.6152 9.91406 21.8203 9.7207C21.8555 9.69141 19.002 9.66797 15 9.66797C11.0918 9.66797 8.14454 9.69141 8.17969 9.7207Z" fill="black"/>
              <path d="M7.03125 14.7773V18.7148L7.2832 18.4746C7.41797 18.3457 8.45508 17.3848 9.58008 16.3477C10.7109 15.3047 11.6367 14.4375 11.6484 14.4141C11.6602 14.3848 7.33008 11.0098 7.11328 10.8809C7.04297 10.8398 7.03125 11.4551 7.03125 14.7773Z" fill="black"/>
              <path d="M20.6543 12.5977C19.4004 13.5645 18.3632 14.3789 18.3574 14.4023C18.3515 14.4258 19.3828 15.3984 20.6425 16.5586L22.9394 18.6797L22.957 16.7227C22.9629 15.6445 22.9629 13.8809 22.957 12.8027L22.9394 10.834L20.6543 12.5977Z" fill="black"/>
              <path d="M10.248 17.8535L7.60547 20.3027L11.3027 20.3203C13.3359 20.3262 16.6641 20.3262 18.6973 20.3203L22.4004 20.3027L19.752 17.8535C18.2988 16.5117 17.0859 15.4102 17.0566 15.4102C17.0332 15.4102 16.6348 15.6973 16.1719 16.0547C15.3105 16.7168 15.0938 16.8223 14.7773 16.7109C14.6836 16.6816 14.25 16.377 13.8047 16.0312C13.3594 15.6914 12.9727 15.4102 12.9434 15.4102C12.9141 15.4102 11.7012 16.5117 10.248 17.8535Z" fill="black"/>
                  </svg>
                  <CopyToClipboard text={'rodrodnik73@gmail.com'}>
                  <a href="mailto:RodRodnik73@gmail.com" className={styles.text} >RodRodnik73@gmail.com</a>
                  </CopyToClipboard>
                </div>
                <div className={styles.social}>
                <a target="_blank" href="https://www.youtube.com/@RodRodnik">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_38_75)">
              <path d="M13.5643 0.0643883C8.87684 0.550716 4.76942 3.09954 2.27332 7.0722C-1.26574 12.7031 -0.597772 20.1796 3.87879 25.0488C6.36903 27.7558 9.45106 29.3671 13.1542 29.8945C13.8514 29.9941 16.1542 29.9882 16.8749 29.8886C20.5194 29.3847 23.6014 27.7792 26.0858 25.0839C28.1307 22.8691 29.4374 20.0331 29.8944 16.8456C29.994 16.1542 29.994 13.8456 29.8944 13.1542C29.5487 10.7167 28.7753 8.64837 27.4921 6.71478C26.953 5.89447 26.4081 5.2265 25.6464 4.45892C23.3085 2.09173 20.4139 0.632748 17.08 0.14056C16.3593 0.0350914 14.2792 -0.0117836 13.5643 0.0643883ZM20.8886 7.73431C22.8456 7.87494 23.3026 7.94525 23.7714 8.17376C25.1483 8.85345 25.5057 10.0253 25.5878 14.0917C25.6347 16.6406 25.5057 18.7441 25.2245 19.957C25.037 20.7773 24.4511 21.5097 23.7186 21.8554C23.2968 22.0546 22.6054 22.1484 20.7128 22.2773C19.1718 22.3827 10.7518 22.3827 9.2577 22.2773C7.24793 22.1367 6.70301 22.0546 6.24012 21.832C5.15613 21.2988 4.7284 20.4257 4.5116 18.3105C4.41199 17.3144 4.37098 14.1972 4.44715 12.8613C4.58778 10.2304 4.82215 9.35736 5.57215 8.64251C6.07606 8.15619 6.48621 7.99212 7.41199 7.88665C8.11512 7.80462 9.71473 7.69915 10.8983 7.65228C12.0936 7.6054 20.0272 7.66986 20.8886 7.73431Z" fill="black"/>
              <path d="M12.2461 14.8007C12.2461 16.7226 12.2695 18.2812 12.293 18.2695C12.3223 18.2577 13.8398 17.4785 15.668 16.5292L18.9902 14.8066L18.7676 14.6777C18.416 14.4726 12.3223 11.3085 12.2812 11.3085C12.2637 11.3085 12.2461 12.8788 12.2461 14.8007Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_38_75">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
                  </svg>
                </a>
                <a target="_blank" href="https://vk.com/RodRodnik73">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/   2000/svg">
              <g clip-path="url(#clip0_38_72)">
              <path d="M13.5643 0.0643883C8.87684 0.550716 4.76942 3.09954 2.27332 7.0722C-1.26574 12.7031 -0.597772 20.1796 3.87879 25.0488C6.36903 27.7558 9.45106 29.3671 13.1542 29.8945C13.8514 29.9941 16.1542 29.9882 16.8749 29.8886C20.5194 29.3847 23.6014 27.7792 26.0858 25.0839C28.1307 22.8691 29.4374 20.039 29.8944 16.8456C29.994 16.1542 29.994 13.8456 29.8944 13.1542C29.5487 10.7167 28.7753 8.64837 27.4921 6.71478C26.953 5.89447 26.4081 5.2265 25.6464 4.45892C23.3085 2.09173 20.4139 0.632748 17.08 0.14056C16.3593 0.0350914 14.2792 -0.0117836 13.5643 0.0643883ZM16.371 9.16986C16.7167 9.39837 16.7225 9.4804 16.7577 11.9824C16.787 14.2265 16.787 14.2734 16.9218 14.4785C17.0975 14.7714 17.3319 14.8652 17.5663 14.7421C17.7889 14.6308 18.4276 13.8867 18.8378 13.2714C19.3007 12.5742 19.8749 11.496 20.2499 10.6054C20.4374 10.1484 20.6542 9.73822 20.7479 9.63861L20.9179 9.46283L22.8807 9.44525C24.9374 9.42767 25.2128 9.45111 25.4413 9.67962C25.6171 9.8554 25.5526 10.2538 25.2362 10.916C24.9257 11.5663 24.6093 12.041 23.3143 13.7753C22.078 15.4335 21.9725 15.6503 22.1835 16.0722C22.2362 16.1777 22.8514 16.8398 23.5487 17.5488C25.2304 19.2538 25.6581 19.8984 25.494 20.4492C25.4589 20.5663 25.3651 20.7245 25.2772 20.8066L25.1249 20.9472L23.3143 20.9648C20.6132 20.9882 20.7245 21.0351 18.996 19.1777C18.0409 18.1464 17.7186 17.9882 17.3202 18.3456C17.0448 18.5859 16.8866 19.037 16.8104 19.7988C16.6991 20.8886 16.6171 20.9472 15.2343 20.9413C13.7929 20.9413 12.8554 20.7363 11.7362 20.1796C11.1386 19.8749 10.2831 19.2597 9.76746 18.7617C8.37293 17.4023 6.84364 15.0468 5.29676 11.8652C4.5116 10.2538 4.40613 9.97259 4.48817 9.74408C4.58192 9.46869 4.78113 9.43939 6.58582 9.43939C8.66004 9.43353 8.61317 9.41595 8.98231 10.2187C9.4452 11.2324 10.1132 12.5097 10.4882 13.1132C11.7948 15.1933 12.5331 15.3691 12.7147 13.6464C12.8202 12.6035 12.7616 11.1035 12.5917 10.5702C12.4979 10.2656 12.1639 9.97259 11.8065 9.86712C11.4315 9.76165 11.4081 9.69134 11.6776 9.39837C12.0116 9.03509 12.1054 9.02337 14.2675 9.04095C16.078 9.05267 16.2128 9.05853 16.371 9.16986Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_38_72">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
                  </svg>
                </a>
                <a target="_blank" href="https://t.me/RodRodnik73">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_38_69)">
              <path d="M13.5644 0.0643883C9.80858 0.451107 6.46873 2.13275 3.90233 4.92181C0.281234 8.85345 -0.931657 14.5546 0.761703 19.6874C1.52928 22.0136 2.74217 23.9589 4.51756 25.705C6.87303 28.0195 9.73241 29.4081 13.1543 29.8945C13.8515 29.9941 16.1543 29.9882 16.875 29.8886C20.3086 29.414 23.2676 27.9492 25.6465 25.541C28.0137 23.1445 29.4023 20.3027 29.8945 16.8456C29.9941 16.1542 29.9941 13.8456 29.8945 13.1542C29.6133 11.1796 29.039 9.39837 28.166 7.8222C27.4805 6.57415 26.6836 5.50775 25.6465 4.45892C23.3144 2.09759 20.414 0.632748 17.0801 0.14056C16.3594 0.0350914 14.2793 -0.0117836 13.5644 0.0643883ZM22.0019 9.1054C22.2598 9.21673 22.3828 9.46283 22.3828 9.87298C22.3828 10.248 19.9043 22.0136 19.7754 22.2714C19.5879 22.6347 19.1836 22.7695 18.7734 22.6171C18.6328 22.5644 17.2793 21.5859 15.2988 20.1152L14.8066 19.7519L13.7461 20.7656C12.9668 21.5038 12.6269 21.7968 12.4863 21.8261C12.3808 21.8495 12.2812 21.8554 12.2695 21.8378C12.2519 21.8202 12.293 20.9706 12.3633 19.9394L12.4863 18.0761L12.9023 17.6952C13.125 17.4843 14.7129 16.0488 16.4238 14.5019C18.1406 12.9492 19.541 11.6484 19.541 11.6015C19.541 11.537 19.4765 11.5136 19.3359 11.5195C19.166 11.5253 18.2988 12.0468 14.7832 14.2558C12.3984 15.7617 10.4121 16.9921 10.3769 16.9921C10.2187 16.9921 6.52147 15.8027 6.34569 15.6972C5.97069 15.4628 6.05272 15.1171 6.53905 14.8417C6.66795 14.7714 7.59959 14.3906 8.61327 14.0038C9.62694 13.6113 11.543 12.873 12.8613 12.3632C14.1855 11.8535 16.541 10.9452 18.1055 10.3417C21.5332 9.01751 21.498 9.02923 21.668 9.02337C21.7383 9.02337 21.8906 9.05853 22.0019 9.1054Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_38_69">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
                  </svg>
                </a>
                </div>
              </address>
            </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
