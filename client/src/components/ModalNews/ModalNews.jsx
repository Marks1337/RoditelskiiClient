import {React, useEffect} from 'react';
import styles from './ModalNews.module.css'

const Modal = ({ active, setActive, content  }) => {

  let title, date, imgSrc, text;
  if (content === 'way') {
    title = 'Улучшение подхода к роднику';
    date = '20.06.2024'
    imgSrc = './img/wayModal.png';
    text = `В рамках нашего непрекращающегося стремления к улучшению и сохранению природы, мы рады сообщить о текущих работах по улучшению подхода к местному роднику. Этот проект направлен на обеспечение безопасного и удобного доступа к чистой, свежей воде для всех жителей и гостей нашего района.\nВ настоящее время ведутся работы по установке металлических листов и перил, которые обеспечат безопасный спуск к роднику. Эти улучшения не только повысят удобство использования родника, но и помогут сохранить его в первозданном виде для будущих поколений.\nМы благодарим всех, кто принял участие в этом проекте, и с нетерпением ждем завершения работ. Мы продолжим работать над тем, чтобы наше сообщество было местом, где природа и люди могут сосуществовать в гармонии.`;
  } else if (content === 'bridge') {
    title = 'Строительство мостика через родник';
    date = '08.06.2024'
    imgSrc = './img/bridgeModal.png';
    text = `Продолжая нашу историю о строительстве моста через родник, хотим поделиться новыми подробностями. На прилагаемой фотографии видно, как мост начинает принимать свою окончательную форму.\nРаботы продолжаются, и мы рады видеть, как мост становится все более устойчивым и надежным. Это обеспечит безопасное пересечение родника для всех жителей и гостей нашего района, позволяя им наслаждаться окружающей природой.\nМы продолжаем благодарить всех, кто поддерживает этот проект, и с нетерпением ждем его завершения. Оставайтесь с нами, чтобы узнать о последних обновлениях по этому проекту. Это важное событие для нашего сообщества, подчеркивающее наше стремление к улучшению и развитию.`;;
  } else if (content === 'startBridge') {
    title = 'Начало строительства мостика через родник';
    date = '20.05.2024'
    imgSrc = './img/startBridgeModal.png';
    text = `Мы рады поделиться волнующими новостями о начале строительства мостика через наш местный родник. Этот проект является частью наших усилий по улучшению инфраструктуры и доступа к природным ресурсам нашего района.\n Работы ведутся вокруг родника, где вода бурлит и течет, создавая живописную картину.\nСтроительство мостика позволит жителям и гостям нашего района безопасно пересекать родник и наслаждаться окружающей природой. Мы уверены, что этот мост станет символом нашего уважения к природе и стремления сохранить ее для будущих поколений.\nМы благодарим всех, кто поддерживает этот проект, и с нетерпением ждем его завершения. Продолжайте следить за нашими новостями, чтобы узнать о последних обновлениях по этому проекту.`;;
  } else if (content === 'baptism') {
    title = 'Священное Крещение';
    date = '19.01.2024'
    imgSrc = './img/baptismModal.png';
    text = `19 января 2024 года прошло значимое событие - Священное Крещение. Этот день стал важным не только для верующих, но и для тех, кто ценит оздоровительные процедуры. Все собрались у купели, чтобы принять участие в этом обряде.\nКупание в холодной воде купели не только символизировало духовное возрождение, но и служило способом укрепления здоровья. Ведь известно, что купание в холодной воде улучшает кровообращение и укрепляет иммунную систему.\nЭто событие стало ярким примером того, как духовные традиции и стремление к здоровому образу жизни могут гармонично сочетаться. Этот день оставил в сердцах всех присутствующих теплые воспоминания и укрепил их стремление к здоровью и духовному развитию.`;;
  } else if (content === 'consecration') {
    title = 'Освящение родника';
    date = '13.06.2023'
    imgSrc = './img/consecrationModal.png';
    text = `3 июня 2023 года стало знаменательным днем для нашего сообщества. В этот день к нам приехал батюшка, чтобы освятить наш родник и купель. Это событие привлекло множество людей, которые пришли поделиться радостью и благословением этого дня.\nОсвящение родника - это не просто ритуал, это символ веры и обновления. Это момент, когда вода, источник жизни, получает священное благословение. Это время, когда мы все вместе молимся и благодарим за дары, которые нам даны.\nМы благодарим всех, кто присоединился к нам в этот день, и надеемся, что благословенная вода принесет вам здоровье, счастье и мир. Пусть наш родник будет источником чистой воды и духовного обновления для всех нас. Мы с нетерпением ждем следующего события и надеемся увидеть вас снова.`;;
  } else if (content === 'newHouse') {
    title = 'Преображение Домика Купели';
    date = '25.05.2023'
    imgSrc = './img/newHouseModal.png';
    text = `В рамках проекта “Преображение Домика Купели” были проведены масштабные работы по реставрации и обновлению интерьера. Этот уникальный деревянный строение, служащий местом для религиозных обрядов и личной медитации, теперь засияло новыми красками.\nВнутреннее пространство было тщательно отреставрировано с сохранением первоначального дизайна. В центре помещения расположен купель, окруженный деревянными ступеньками. Свет, проникающий через крестообразные окна, создает атмосферу умиротворения и благоговения.\nРаботы были завершены в срок и получили высокую оценку от посетителей. Этот проект стал важным шагом в сохранении и возрождении нашего культурного наследия. Мы продолжим нашу работу, стремясь к сохранению исторических памятников для будущих поколений.`;;
  }

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setActive(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
  
    // Ваш существующий код
    const html = document.documentElement;
    if (active) {
      html.classList.add('noScroll');
    } else {
      html.classList.remove('noScroll');
    }
  
    // Удаляем слушатель событий при размонтировании компонента
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [active]);

  return (
    <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
      <div className={styles.modalClose}>
        <svg className={styles.svg} onClick={() => setActive(false)} width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6066 21.3934C22.2161 21.0029 21.5829 21.0029 21.1924 21.3934C20.8019 21.7839 20.8019 22.4171 21.1924 22.8076L22.6066 21.3934ZM40.9914 42.6066C41.3819 42.9971 42.0151 42.9971 42.4056 42.6066C42.7961 42.2161 42.7961 41.5829 42.4056 41.1924L40.9914 42.6066ZM21.1924 41.1924C20.8019 41.5829 20.8019 42.2161 21.1924 42.6066C21.5829 42.9971 22.2161 42.9971 22.6066 42.6066L21.1924 41.1924ZM42.4056 22.8076C42.7961 22.4171 42.7961 21.7839 42.4056 21.3934C42.0151 21.0029 41.3819 21.0029 40.9914 21.3934L42.4056 22.8076ZM21.1924 22.8076L40.9914 42.6066L42.4056 41.1924L22.6066 21.3934L21.1924 22.8076ZM22.6066 42.6066L42.4056 22.8076L40.9914 21.3934L21.1924 41.1924L22.6066 42.6066Z" fill="black"/>
      </svg>
        <h4 className={styles.heading}>Новости</h4>
      </div>
      <div className={styles.modalContent}>
        <h4 className={styles.headingPopup}>{title}</h4>
        <time className={styles.time} dateTime={date}>{date}</time>
        <div className={styles.content}>
          <img src={imgSrc} alt={title} />
          <div className={styles.textBox}>
          <p className={styles.text}>
      {text && text.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
