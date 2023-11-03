function counter() {
    const countDownDate = new Date("Nov 4, 2023 14:10:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const $hours = $('.clock__hour');
    const $minutes = $('.clock__minute');
    const $seconds = $('.clock__second');

    $hours.text((hours + (days * 24)).toString().length === 1 ? '0' + (hours + (days * 24)) : (hours + (days * 24)));
    $minutes.text(minutes.toString().length === 1 ? '0' + minutes : minutes);
    $seconds.text(seconds.toString().length === 1 ? '0' + seconds : seconds);
}

function changeText() {
const texts = {
    'header-1': {
        ru: {
            value: 'ПОРТРЕТ'
        },
        zh: {
            value: '宽家庭'
        }
    },
    'header-2': {
        ru: {
            value: 'ШИРОКОЙ'
        },
        zh: {
            value: '的'
        }
    },
    'header-3': {
        ru: {
            value: 'СЕМЬИ'
        },
        zh: {
            value: '画像'
        }
    },
    'warning': {
        ru: {
            value: 'ВНИМАНИЕ:'
        },
        zh: {
            value: '注意:'
        }
    }
}

const headerTop = $('.main-title__dynamic')[0];
const headerMiddle = $('.main-title__dynamic')[1];
const headerBottom = $('.main-title__dynamic')[2];
const warning = $('.warning')[0];

switchText(headerTop, texts);
switchText(headerMiddle, texts);
switchText(headerBottom, texts);
switchText(warning, texts);
}

function switchText(element, values) {
    const text = $(element).attr('data-text');
    const lang = $(element).attr('data-lang');

    if (lang === 'ru') {
        $(element).text(values[text].zh.value);
        $(element).attr('data-lang', 'zh');
    } else {
        $(element).text(values[text].ru.value);
        $(element).attr('data-lang', 'ru');
    }
}

(function () {
    setInterval(counter, 1000);
    setInterval(changeText, 1000);
})()