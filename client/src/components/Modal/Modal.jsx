import {React, useEffect} from 'react';
import styles from './Modal.module.css'

const Modal = ({ active, setActive, content }) => {

  let title, imgSrc, text;
  if (content === 'bath') {
    title = 'Купель';
    imgSrc = './img/bathModal.png';
    text = `Приглашаем вас посетить наш родник и окунуться в купель. Это уникальная возможность ощутить целебные свойства чистой и прозрачной воды, истекающей прямо из глубин земли. Ощущение погружения в воду незабываемое, она окутывает вас теплом и умиротворением.\nПосле купания вы почувствуете, как ваше тело наполняется энергией, мышцы расслабляются, а ум становится ясным и спокойным. Это почти как медитация, только вы погружаетесь в воду. Не забудьте после купания отдохнуть, насладиться тишиной и спокойствием, послушать шум воды и пение птиц.\nКупание в роднике - это не только о здоровье, это еще и о духовном обновлении. Это шанс заново открыть для себя мир и почувствовать свою связь с природой. Воспользуйтесь этим уникальным шансом и окунитесь в купель.`;
  } else if (content === 'water') {
    title = 'Вода';
    imgSrc = './img/waterModal.png';
    text = `На нашем роднике “Родительский” чистейшая вода ждет вас в любое время года. Это место, где природа щедро дарит свои блага, предлагая вам возможность попить свежей воды прямо из источника или набрать её в емкость для дальнейшего использования.\nНаш родник уникален тем, что вода в нем постоянно поддерживает температуру в 4 градуса, независимо от времени года. Это идеальная температура, которая помогает сохранить свежесть и чистоту воды, делая её особенно приятной для питья.\nПриходите и наслаждайтесь этим натуральным источником, который мы бережно сохраняем для вас. Наш родник “Родительский” - это не просто источник воды, это место, где вы можете на мгновение остановиться, насладиться тишиной природы и наполниться её энергией. Приходите и убедитесь в этом сами!`;;
  } else if (content === 'house') {
    title = 'Детский дом';
    imgSrc = './img/houseModal.png';
    text = 'Родник “Родительский” расположен в непосредственной близости от Детского дома имени А.М. Матросова в селе Ивановка. Этот детский дом имеет особое значение, так как он назван в честь Александра Матросова, героя Великой Отечественной войны.\n Детский дом в Ивановке был основан в 1960 году и с тех пор служит домом для многих детей. Он также известен как "Центр патриотического воспитания", что подчеркивает его важность в формировании патриотических ценностей у молодого поколения.\n Посещение этого места предоставляет уникальную возможность узнать больше об истории детского дома, его значении для сообщества. Это также шанс почтить память Александра Матросова и других героев, которые отдали свои жизни за нашу страну.\n Приглашаем вас посетить родник “Родительский” и Детский дом имени А.М. Матросова, чтобы лично увидеть и почувствовать историю и культуру этого места.';
  } else if (content === 'rules') {
    title = 'Правила посещения';
    imgSrc = './img/rulesModal.png';
    text = '1. Соблюдайте чистоту: Пожалуйста, не оставляйте мусор после себя. Используйте предоставленные мусорные баки.\n2. Бережное отношение к природе: Не нарушайте природную среду вокруг родника. Не ломайте ветки деревьев и не рвите цветы.\n3. Безопасность: Плавание в роднике запрещено, так как это может быть опасно.\n4. Снятие обуви: Перед заходом в купель, пожалуйста, снимите обувь на пороге.\n5. Уважение к другим посетителям: Уважайте личное пространство других посетителей. Не мешайте им наслаждаться природой.\n\nСпасибо за соблюдение этих правил. Мы ценим вашу заботу о роднике “Родительский” и его окружающей среде. Приятного отдыха!';
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
        <h4 className={styles.heading}>Посетителям</h4>
      </div>
      <div className={styles.modalContent}>
        <h4 className={styles.headingPopup}>{title}</h4>
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
