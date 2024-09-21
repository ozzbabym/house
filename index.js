var entrance = [
    {
        id: 1,
        img: './assets/entrance/1.jpg'
    },
    {
        id: 3,
        img: './assets/entrance/3.jpg'
    },
    {
        id: 7,
        img: './assets/entrance/7.jpg'
    },
    {
        id: 8,
        img: './assets/entrance/8.jpg'
    },
    {
        id: 12,
        img: './assets/entrance/12.jpg'
    },
    {
        id: 13,
        img: './assets/entrance/13.jpg'
    },
    {
        id: 14,
        img: './assets/entrance/14.jpg'
    },
    {
        id: 16,
        img: './assets/entrance/16.jpg'
    },
    {
        id: 17,
        img: './assets/entrance/17.jpg'
    },
    {
        id: 18,
        img: './assets/entrance/18.jpg'
    },
    {
        id: 19,
        img: './assets/entrance/19.jpg'
    },
    {
        id: 20,
        img: './assets/entrance/20.jpg'
    },
    {
        id: 21,
        img: './assets/entrance/21.jpg'
    },
    {
        id: 22,
        img: './assets/entrance/22.jpg'
    },
    {
        id: 23,
        img: './assets/entrance/23.jpg'
    },
    {
        id: 24,
        img: './assets/entrance/24.jpg'
    },
    {
        id: 25,
        img: './assets/entrance/25.jpg'
    },
    {
        id: 26,
        img: './assets/entrance/26.jpg'
    },
    {
        id: 27,
        img: './assets/entrance/27.jpg'
    },
    {
        id: 28,
        img: './assets/entrance/28.jpg'
    },
    {
        id: 31,
        img: './assets/entrance/31.jpg'
    },
    {
        id: 32,
        img: './assets/entrance/32.jpg'
    },
    {
        id: 33,
        img: './assets/entrance/33.jpg'
    },
    {
        id: 36,
        img: './assets/entrance/36.jpg'
    }
];
var basement = [
    {
        id: 4,
        img: './assets/basement/4.jpg'
    },
    {
        id: 5,
        img: './assets/basement/5.jpg'
    },
    {
        id: 6,
        img: './assets/basement/6.jpg'
    },
    {
        id: 9,
        img: './assets/basement/9.jpg'
    },
    {
        id: 9,
        img: './assets/basement/10.jpg'
    },
    {
        id: 11,
        img: './assets/basement/11.jpg'
    },
    {
        id: 15,
        img: './assets/basement/15.jpg'
    },
    {
        id: 29,
        img: './assets/basement/29.jpg'
    },
    {
        id: 30,
        img: './assets/basement/30.jpg'
    },
    {
        id: 34,
        img: './assets/basement/34.jpg'
    }
]
var vides = [
    {
        id: 1,
        video: './assets/video/1.mp4'
    },
    {
        id: 2,
        video: './assets/video/2.mp4'
    },
    {
        id: 3,
        video: './assets/video/3.mp4'
    },
    {
        id: 5,
        video: './assets/video/5.mp4'
    },
    {
        id: 6,
        video: './assets/video/6.mp4'
    }
];

$('.js-entrance-img').html(entrance.map(item => {
    return `<img class='item-img' src='${item.img}' />`
}).join(''));

$('.js-basement-img').html(basement.map(item => {
    return `<img class='item-img' src='${item.img}' />`
}).join(''))

$('.js-videos').html(vides.map(video => {
    return `<video class='item-video' controls width="360">
                <source src="${video.video}" type="video/mp4" />
                <a href="${video.video}">MP4</a>
            </video>`
}).join(''));