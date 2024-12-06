let re;

$.ajax({
    url: "./api/index.json", dataType: 'json',
    success: function (result) {
        re = $.parseJSON(JSON.stringify(result));
        let sum = 0;
        for(dormitory in re.dormitories)
        {
            sum+=re.dormitories[dormitory].members.length;
        }
        let i = 0;
        for (var k = 0; k < re.rand_num; k++) {
            while (true) {
                let number = rnd(i++)%sum;
                let j = 0;
                while(number >= re.dormitories[j].members.length)
                {
                    number -= re.dormitories[j].members.length;
                    j++;
                }
                if(re.dormitories[j].members[number].visited){continue;}
                else{
                    re.dormitories[j].members[number].visited = true;
                    re.randoms[0][k] = re.dormitories[j].members[number];
                    break;
                }
            }
        }
        for (var k = 0; k < re.rand_num; k++) {
            while (true) {
                let number = rnd(i++)%sum;
                let j = 0;
                while(number >= re.dormitories[j].members.length)
                {
                    number -= re.dormitories[j].members.length;
                    j++;
                }
                if(re.dormitories[j].members[number].visited){continue;}
                else{
                    re.dormitories[j].members[number].visited = true;
                    re.randoms[1][k] = re.dormitories[j].members[number];
                    break;
                }
            }
        }

    }, error: function (error) {
        console.log(error);
        location.replace("./api/index.json");
    },
    async: false
});

window.onload = function () {
    Vue.createApp({
        data: function () {
            return re;
        }
    }).mount("#vm");
    let py = $(document).scrollTop();
    $(window).scroll(function () {
        if (($(document).scrollTop() > $("#title").height())) {
            if (($(document).scrollTop() - py) < -5) {
                $("#nav_bar").removeClass("nav_invisible").addClass("nav_visible");
            }
            if (($(document).scrollTop() - py) > 5) {
                $("#nav_bar").removeClass("nav_visible").addClass("nav_invisible");
            }
        } else {
            $("#nav_bar").removeClass("nav_visible").addClass("nav_invisible");
        }
        py = $(document).scrollTop();
    });
}


function rnd(seed) {
    const d = new Date();
    seed = d.getFullYear() * 8928 + d.getMonth() * 744 + d.getDate() * 24 + d.getHours() * 9 + seed * 7;
    seed = (seed * 9301 + 49297) % 233280;
    seed = Math.ceil(seed % 10000 + seed / 10000);
    seed = (seed * 9301 + 49297) % 233280;
    2
    return seed;
}