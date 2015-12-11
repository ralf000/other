//for ORV
$(function () {
    $('.tenders-list #box').hide();
    var title = $('.tenders-list h4.address a#down');

    title.each(function (idx, elm) {
        $(this).text((idx + 1) + '. ' + $(this).text());
    });
    $('.tenders-list').on('click', 'a#down', function () {
        var box = $(this).parent().parent('.tenders-list').children('#box');
        box.toggle('fade');
        return false;
    });
});

//for analitics
$(function () {
    $('h4.address a.address').each(function (idx, elm) {
        $(this).text((idx + 1) + '. ' + $(this).text());
    })
});

//for interview
$(function () {
    $('.col-md-12.mid a').attr('target', '_blank');
    var item = $('.item .description');
    item.each(function (idx) {
        $(this)
                .children()
                .slice(8)
                .wrapAll('<div id="box"></div>');
        $(this)
                .find('#box')
                .hide()
                .after('<a href="#" id="down" >Все интервью</a>')
    });
    var down = $('a#down');
    down.on('click', function (event) {
        event.preventDefault();
        var box = $(this).prev('#box');
        $(this).prev('#box').toggle('blind');
        if ($(this).text() === 'Все интервью') {
            $(this).text('Свернуть список');
        } else {
            $(this).text('Все интервью');
            var curOffs = $('body').scrollTop();
            var itemOffs = $(this).parent().offset().top - 10;
            var offs = (curOffs < itemOffs) ? curOffs : itemOffs;
            $('body')
                    .animate({
                        scrollTop: offs
                    }, {
                        duration: 400,
                        queue: false
                    });
        }
    });
});

//for account/about
$('map > area').click(function (e) {
    $.fancybox({
        href: $(this).attr('href'),
        type: 'iframe'
    });
    return false;
});

$(function () {
    $('footer').add('.second-footer').add('.content-page-header').add('.breadcrumb').remove();
});

//auto imageLinker for EIIP
$(function () {
    var imgs = $('#content img');
    var src = $(imgs[0]).attr('src');
    var imgName = src[src.length - 1];
    var imgLink = src[src.length - 2];
    var i = 0;

    function srcBuilder(src, counter) {
        var srcArr = src.split('/');

        var name = srcArr[srcArr.length - 1].split('.'); //1.jpg
        name[0] = Number(name[0]) + counter;
        name = name.join('.');
        srcArr[srcArr.length - 1] = name;
        srcArr[srcArr.length - 2] = Number(srcArr[srcArr.length - 2]);
        srcArr[srcArr.length - 2] += counter; //12345

        return srcArr.join('/');
    }

    imgs.each(function (idx, img) {
        $(this).attr('src', srcBuilder(src, i));
        i++;
    });
});

//for techparkareas
$(function () {
    var arr = [
        {
            name: 'Технопарк «Визбас»',
            url: 'http://inmoscow.org/tehnopark.html?id=56388a0b4c105cb7c5dbf0e5'
        },
        {
            name: 'Технопарк «Итэлма»',
            url: 'http://inmoscow.org/tehnopark.html?id=56388a484c105cb7c5dbf136'
        },
        {
            name: 'Технопарк «ТехноСпарк»',
            url: 'http://inmoscow.org/tehnopark.html?id=56388a0d4c105cb7c5dbf0e6'
        },
        {
            name: 'Технопарк «ФГБНУ Тиснум»',
            url: 'http://inmoscow.org/tehnopark.html?id=56388a494c105cb7c5dbf137'
        }
    ];
    var list = $('#content .row .col-md-3');
    function techparkCreator(obj) {
        return '<div class="dec4-menu-item"><div class="cell"><a target="blank" href="' + obj.url + '">' + obj.name + '</a></div></div>';
    }
    for (var i = 0, max = arr.length; i < max; i++) {
        list.append(techparkCreator(arr[i]));
    }
});

/* 
 *  for search russian text on page
 * @return array words and phrases on russian
 */
function wordsFinder() {
    var doc = $('body');
    var fetch = $.unique(doc.html().match(/[а-яА-Я]+[\sа-яА-Я]*/gim));
    return $(fetch).map(function (idx, item) {
        return item.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim();
    });
}

console.log(wordsFinder());