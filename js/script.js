import store from './store.js';

const swiperWrapper = document.querySelector('.swiper-wrapper');
for (let i = 0; i < store.length; i++) {
  const storeItemInfo = store[i];
  const section = document.createElement('section');
  section.className = 'swiper-slide week';

  section.innerHTML = `
    <h3>${storeItemInfo.weekDate}</h3>
    <div class="days">
      <div class="day">
        <div class="day__title">
          <h4>${storeItemInfo.weekdays.date}</h4>
          <h4>Наша христианская жизнь и служение</h4>
        </div>

        <h5 class="technical">ТЕХНИЧЕСКАЯ СЛУЖБА</h5>
        <div class="item">
          <h6>Микрофон трибуна:</h6>
          <span class="name" name="${storeItemInfo.weekdays.technical.scene}">${storeItemInfo.weekdays.technical.scene}</span>
        </div>
        <div class="item_two">
          <h6>Аудио и видео:</h6>
          <div>
            <p>
              Отв. -
              <span class="name" name="${storeItemInfo.weekdays.technical.audioVideo.main}">${storeItemInfo.weekdays.technical.audioVideo.main}</span>
            </p>
            <p>
              Пом. -
              <span class="name" name="${storeItemInfo.weekdays.technical.audioVideo.helper}">${storeItemInfo.weekdays.technical.audioVideo.helper}</span>
            </p>
          </div>
        </div>
        <div class="item">
          <h6>Распоредитель:</h6>
          <span class="name" name="${storeItemInfo.weekdays.technical.manager}">${storeItemInfo.weekdays.technical.manager}</span>
        </div>
        <div class="item">
          <h6>Микрофоны:</h6>
          <span class="name" name="${storeItemInfo.weekdays.technical.microphone}">${storeItemInfo.weekdays.technical.microphone}</span>
        </div>

        <h5 class="treasures">СОКРОВИЩА ИЗ СЛОВА БОГА</h5>
        <div class="item">
          <h6>Председатель:</h6>
          <span class="name" name="${storeItemInfo.weekdays.treasures.chairman}">${storeItemInfo.weekdays.treasures.chairman}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.weekdays.treasures.prayer}">${storeItemInfo.weekdays.treasures.prayer}</span>
        </div>
        <ul class="treasures-list">
          <li>
            <h6>${storeItemInfo.weekdays.treasures.speechTitle}</h6>
            <span>(10 мин.)</span>
            <span class="name" name="${storeItemInfo.weekdays.treasures.speech}">${storeItemInfo.weekdays.treasures.speech}</span>
          </li>
          <li>
            <h6>2. Духовные жемчужины</h6>
            <span>(10 мин.)</span>
            <span class="name" name="${storeItemInfo.weekdays.treasures.pearl}">${storeItemInfo.weekdays.treasures.pearl}</span>
          </li>
          <li>
            <h6>3. Чтение Библии</h6>
            <span>(4 мин.)</span>
            <span class="name" name="${storeItemInfo.weekdays.treasures.reading}">${storeItemInfo.weekdays.treasures.reading}</span>
          </li>
        </ul>

        <h5 class="skills">ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ</h5>
        <div class="skills-list">
          <ul>
            ${storeItemInfo.weekdays.skills.map(skillItem => {
    return `
                  <li>
                    <h6>${skillItem.title}</h6>
                    <span>${skillItem.description}</span>
                    <span class="name" name="${skillItem.name}">${skillItem.name}</span>
                  </li>
                `;
  }).join('')}
          </ul>
        </div>

        <h5 class="live">ХРИСТИАНСКАЯ ЖИЗНЬ</h5>
        <div class="live-list">
          <ul>
            ${storeItemInfo.weekdays.live.map(liveItem => {
    return `
                  <li>
                    <h6>${liveItem.title}</h6>
                    <span>${liveItem.description}</span>
                    <span class="name" name="${liveItem.name}">${liveItem.name}</span>
                  </li>
                `;
  }).join('')}
          </ul>
        </div>
        <div class="item">
          <h6>Заключительные слова (3 мин.)</h6>
          <span class="name" name="${storeItemInfo.weekdays.finalWords}">${storeItemInfo.weekdays.finalWords}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.weekdays.prayer}">${storeItemInfo.weekdays.prayer}</span>
        </div>
      </div>

      <div class="day">
        <div class="day__title">
          <h4>${storeItemInfo.dayOff.date}</h4>
          <h4>Речь и Сторожевая башня</h4>
        </div>

        <h5 class="technical">ТЕХНИЧЕСКАЯ СЛУЖБА</h5>
        <div class="item">
          <h6>Микрофон трибуна:</h6>
          <span class="name" name="${storeItemInfo.dayOff.technical.scene}">${storeItemInfo.dayOff.technical.scene}</span>
        </div>
        <div class="item_two">
          <h6>Аудио и видео:</h6>
          <div>
            <p>
              Отв. -
              <span class="name" name="${storeItemInfo.dayOff.technical.audioVideo.main}">${storeItemInfo.dayOff.technical.audioVideo.main}</span>
            </p>
            <p>
              Пом. -
              <span class="name" name="${storeItemInfo.dayOff.technical.audioVideo.helper}">${storeItemInfo.dayOff.technical.audioVideo.helper}</span>
            </p>
          </div>
        </div>
        <div class="item">
          <h6>Распоредитель:</h6>
          <span class="name" name="${storeItemInfo.dayOff.technical.manager}">${storeItemInfo.dayOff.technical.manager}</span>
        </div>
        <div class="item">
          <h6>Микрофоны:</h6>
          <span class="name" name="${storeItemInfo.dayOff.technical.microphone}">${storeItemInfo.dayOff.technical.microphone}</span>
        </div>

        <h5 class="speak">ПУБЛИЧНАЯ РЕЧЬ</h5>
        <div class="item">
          <h6>Председатель:</h6>
          <span class="name" name="${storeItemInfo.dayOff.publicMeeting.chairman}">${storeItemInfo.dayOff.publicMeeting.chairman}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.dayOff.publicMeeting.prayer}">${storeItemInfo.dayOff.publicMeeting.prayer}</span>
        </div>
        <div class="item_two">
          <h6>Речь:</h6>
          <div>
            <p>
              Докладчик-
              <span class="name" name="${storeItemInfo.dayOff.publicMeeting.speech}">${storeItemInfo.dayOff.publicMeeting.speech}</span>
            </p>
            <p>
              Тема-
              <span class="name" name="${storeItemInfo.dayOff.publicMeeting.speechTitle}">${storeItemInfo.dayOff.publicMeeting.speechTitle}</span>
            </p>
          </div>
        </div>

        <h5 class="tower">СТОРОЖЕВАЯ БАШНЯ</h5>
        <div class="item">
          <h6>Ведущий:</h6>
          <span class="name" name="${storeItemInfo.dayOff.watchtower.leading}">${storeItemInfo.dayOff.watchtower.leading}</span>
        </div>
        <div class="item">
          <h6>Чтец:</h6>
          <span class="name" name="${storeItemInfo.dayOff.watchtower.reading}">${storeItemInfo.dayOff.watchtower.reading}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.dayOff.prayer}">${storeItemInfo.dayOff.prayer}</span>
        </div>
      </div>
    </div>
  `;
  swiperWrapper.appendChild(section);
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  initialSlide: 2, // Открыть 3-й слайд (индексация с 0)
  slidesPerView: 1,
  spaceBetween: 40,
});
