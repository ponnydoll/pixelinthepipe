function CookBook() {
    this.cookBookPage = 0;
    this.cookBookItemList = undefined;

    this.initCookBook = function (itemList) {
        if (itemList == undefined){
            this.noCookbook();
            return;
        }

        console.log(itemList);
        this.cookBookItemList = itemList;
        this.renderCookBook();

        var leftClick = function (cookBook) {
            return function () {
                cookBook.cookBookPage -= 2;

                if (cookBook.cookBookPage < 0)
                    cookBook.cookBookPage = 0;
                cookBook.renderCookBook();
            }
        };



        var rightClick = function (cookBook) {
            return function () {
                if (cookBook.cookBookItemList.length - 2 > cookBook.cookBookPage)
                    cookBook.cookBookPage += 2;

                cookBook.renderCookBook();
            }
        };


        $('.arrows .left.arrow').click(leftClick(this));
        $('.arrows .right.arrow').click(rightClick(this));

    };

    this.noCookbook = function () {

        $('#fail-message').hide();
        $('#fail-text').html('Cookbook not available');

        var finishViewport = $('#fail-viewport');

        finishViewport.fadeIn(500, function () {
        });
        setInterval(function () {
            finishViewport.fadeOut(1000);
        },1500);
    };


    this.renderItemList = function (itemsList) {

        if (itemsList == undefined || itemsList.length == 0)
            return 'No available';

        var array = [];
        for (var obj in itemsList) {
            array.push(items[obj].name+'('+itemsList[obj]+')');
        }

        return array.join(', ');
    };

    this.renderPage = function (page) {
        if (page < this.cookBookItemList.length) {
            return '<h2 class="center">' + items[this.cookBookItemList[page]].name + '</h2>' +
                '<h3 class="center">Element type: ' + itemTypes[items[this.cookBookItemList[page]].type].name + '</h3>' +
                '<p class="center">' + itemTypes[items[this.cookBookItemList[page]].type].desc + '</p>' +
                (items[this.cookBookItemList[page]].transportType != undefined ?
                '<p class="center">Transportation: ' + transportationItems[items[this.cookBookItemList[page]].transportType].name + '</p>'
                    :
                '<p class="center">Transportation: ' + transportationItems['pipe'].name + ', ' + transportationItems['line'].name + '</p>') +

                '<p class="center">Combined by: ' + this.renderItemList(items[this.cookBookItemList[page]].combine) + '</p>' +
                '<p class="center">Disassemble: ' + this.renderItemList(items[this.cookBookItemList[page]].separate) + '</p>'

                ;
        } else {
            return '';
        }
    };

    this.renderCookBook = function () {
        $('#bookWindow .left .text').html(this.renderPage(this.cookBookPage));
        $('#bookWindow .right .text').html(this.renderPage(this.cookBookPage + 1));
    };
}