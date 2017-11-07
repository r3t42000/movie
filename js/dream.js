$(document).ready(function(){
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',

    });
    $grid.masonry('reloadItems')
    msnry.reloadItems()
})

var moviedatas=
[
{name: "Leon",
 year: "1994",
 editor: "Luc Besson",
 image_url: "https://i.pinimg.com/564x/53/c9/4a/53c94a94575b3602c47475ea67a5df34.jpg",
 wiki:"https://en.wikipedia.org/wiki/L%C3%A9on:_The_Professional",
},
{name: "The Piano Teacher",
 year: "2002",
 editor: "Michael Haneke",
 image_url: "https://i.pinimg.com/564x/27/10/27/2710279607c785afc2ca67016fadebe4.jpg",
 wiki: "https://en.wikipedia.org/wiki/The_Piano_Teacher_(film)",
},
{name: "Amélie",
 year: "2001",
 editor: "Jean-Pierre Jeunet",
 image_url: "https://i.pinimg.com/564x/f4/37/d4/f437d46d7a1558d280f8858674200391.jpg",
 wiki: "https://en.wikipedia.org/wiki/Am%C3%A9lie",
},
{name: "Dogtooth",
 year: "2009",
 editor: "Yorgos Lanthimos",
 image_url: "https://i.pinimg.com/564x/c4/08/01/c4080138e84e8d0e0489c6886f9f34df.jpg",
 wiki: "https://en.wikipedia.org/wiki/Dogtooth_(film)",
},
{name: "4 Months, 3 Weeks and 2 Days",
 year: "2007",
 editor: "Cristian Mungiu",
 image_url: "https://i.pinimg.com/736x/a0/83/b6/a083b646d694b3a9ab8fb7ae4cf74697--cinema-paradiso--weeks.jpg",
 wiki: "https://en.wikipedia.org/wiki/4_Months,_3_Weeks_and_2_Days",
},
{name: "Submarine",
 year: "2011",
 editor: "Richard Ayoade",
 image_url: "https://i.pinimg.com/564x/d7/2c/74/d72c74f578527db5ae809194644b38c1.jpg",
 wiki: "https://en.wikipedia.org/wiki/Submarine_(2010_film)",
},
{name: "The Perks of Being a Wallflower",
 year: "2012",
 editor: "Stephen Chbosky",
 image_url: "https://i.pinimg.com/564x/de/01/7a/de017ad65c3b223ba290362b62533855.jpg",
 wiki: "https://en.wikipedia.org/wiki/The_Perks_of_Being_a_Wallflower",
},
{name: "Being John Malkovich",
 year: "1999",
 editor: "Spike Jonze",
 image_url: "https://i.pinimg.com/564x/eb/fd/0d/ebfd0dd24e88f99bc6ef5ebb0fd85159.jpg",
 wiki: "https://en.wikipedia.org/wiki/Being_John_Malkovich",
},
{name: "Blue Jasmine",
 year: "2013",
 editor: "Woody Allen",
 image_url: "http://www.cardinalcommusa.com/wp-content/uploads/2013/04/bluejasmineCOMP-430x635.jpg",
 wiki: "https://en.wikipedia.org/wiki/Blue_Jasmine",
},
{name: "Three Colours: Red",
 year: "1994",
 editor: "Krzysztof Kieślowski",
 image_url: "https://i.pinimg.com/564x/54/46/3c/54463c9dced2241efa8d6db764cb1161.jpg",
 wiki: "https://en.wikipedia.org/wiki/Three_Colours:_Red",
},
{name: "Three Colours: Blue",
 year: "1993",
 editor: "Krzysztof Kieślowski",
 image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BZGJhNDdmMWMtNzZiYy00MmFiLThjNmUtYTE1ZjRkNjdjYmQ5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
 wiki: "https://en.wikipedia.org/wiki/Three_Colours:_Blue",
},
{name: "Three Colours: White",
 year: "1994",
 editor: "Krzysztof Kieślowski",
 image_url: "https://i.pinimg.com/564x/53/dd/3b/53dd3bb8eadb38b1bf5da4f25a0d849f.jpg",
 wiki: "https://en.wikipedia.org/wiki/Three_Colours:_White",
},
{name: "American Beauty",
 year: "1999",
 editor: "Sam Mendes",
 image_url: "https://i.pinimg.com/564x/2d/6d/34/2d6d34b1a6a0e3cebfea2447a68168b1.jpg",
 wiki: "https://en.wikipedia.org/wiki/American_Beauty_(1999_film)",
},
{name: "Fight Club",
 year: "1999",
 editor: "David Fincher",
 image_url: "https://i.pinimg.com/236x/18/65/c7/1865c7bc3050a103605e5e8c7e6afd4b.jpg",
 wiki: "https://en.wikipedia.org/wiki/Fight_Club",
},
{name: "Frances Ha",
 year: "2012",
 editor: "Noah Baumbach",
 image_url: "https://i.pinimg.com/564x/50/5f/21/505f212397f0e4846203c005f77329a2.jpg",
 wiki: "https://en.wikipedia.org/wiki/Frances_Ha",
},
{name: "Laurence Anyways",
 year: "2012",
 editor: "Xavier Dolan",
 image_url: "https://i.pinimg.com/564x/ea/eb/e9/eaebe9b40e344c20c7b5910d49d253a8.jpg",
 wiki: "https://en.wikipedia.org/wiki/Laurence_Anyways",
},
{name: "花樣年華",
 year: "2000",
 editor: "王家衛",
 image_url: "https://i.pinimg.com/564x/44/bf/a4/44bfa46b9ecf707f89680591f5aae89d.jpg",
 wiki: "https://zh.wikipedia.org/wiki/%E8%8A%B1%E6%A8%A3%E5%B9%B4%E8%8F%AF",
},
{name: "阿飛正傳",
 year: "1990",
 editor: "王家衛",
 image_url: "https://s-media-cache-ak0.pinimg.com/originals/f3/90/95/f39095eb2cdb3fec12fafde70f2fa0d6.jpg",
 wiki: "https://zh.wikipedia.org/wiki/%E9%98%BF%E9%A3%9B%E6%AD%A3%E5%82%B3",
},
{name: "重慶森林",
 year: "1994",
 editor: "王家衛",
 image_url: "https://i.pinimg.com/236x/32/89/8c/32898ca64079c2acf71a1f120d10f02f.jpg",
 wiki: "https://zh.wikipedia.org/wiki/%E9%87%8D%E5%BA%86%E6%A3%AE%E6%9E%97",
},
{name: "Underground",
 year: "1995",
 editor: "Emir Kusturica",
 image_url: "https://i.pinimg.com/564x/93/7e/9e/937e9ee48248193e70a189aecc9e8dd9.jpg",
 wiki: "https://en.wikipedia.org/wiki/Underground_(1995_film)",
},
{name: "No Country for Old Men",
 year: "2007",
 editor: "Joel Coen  Ethan Coen",
 image_url: "https://i.pinimg.com/564x/0f/d7/1a/0fd71a7f9e862e91a45af8592decd64d.jpg",
 wiki: "https://en.wikipedia.org/wiki/No_Country_for_Old_Men_(film)",
},
{name: "The Grand Budapest Hotel",
 year: "2014",
 editor: "Wes Anderson",
 image_url: "https://i.pinimg.com/564x/f9/47/e8/f947e847504c384421bb6506908610b3.jpg",
 wiki: "https://en.wikipedia.org/wiki/The_Grand_Budapest_Hotel",
},
{name: "Hard Candy",
 year: "2005",
 editor: "David Slade",
 image_url: "https://i.pinimg.com/564x/e8/51/62/e851624112fc09270784fc532c07480a.jpg",
 wiki: "https://en.wikipedia.org/wiki/Hard_Candy_(film)",
},
{name: "一ㄧ",
 year: "2000",
 editor: "楊德昌",
 image_url: "https://i.pinimg.com/564x/27/5a/92/275a9244ca04ab88fcd180f402b187e9.jpg",
 wiki: "https://zh.wikipedia.org/zh-tw/%E4%B8%80%E4%B8%80",
},
{name: "Inception",
 year: "2010",
 editor: "Christopher Nolan",
 image_url: "https://i.pinimg.com/564x/96/af/0b/96af0b1e739664f31dcc08dceb5ea096.jpg",
 wiki: "https://en.wikipedia.org/wiki/Inception",
},
{name: "Memento",
 year: "2000",
 editor: "Christopher Nolan",
 image_url: "https://i.pinimg.com/564x/3b/4b/32/3b4b320a6faea81ddbd4b99753f062df.jpg",
 wiki: "https://en.wikipedia.org/wiki/Memento_(film)",
},
{name: "Blue Is the Warmest Colour",
 year: "2013",
 editor: "Abdellatif Kechiche",
 image_url: "https://i.pinimg.com/564x/fa/94/1a/fa941a0a51fa43622325184b3fa814c7.jpg",
 wiki: "https://en.wikipedia.org/wiki/Blue_Is_the_Warmest_Colour",
},
{name: "A Clockwork Orange",
 year: "1971",
 editor: "Stanley Kubrick",
 image_url: "https://i.pinimg.com/564x/77/e1/ad/77e1ad307ded6412b5182293b0c36bb2.jpg",
 wiki: "https://en.wikipedia.org/wiki/A_Clockwork_Orange_(film)",
},
{name: "囍宴",
 year: "1993",
 editor: "李安",
 image_url: "https://i.pinimg.com/564x/0b/8d/9d/0b8d9d4689496aad659bdedd176c9a5f.jpg",
 wiki: "https://zh.wikipedia.org/wiki/%E5%9B%8D%E5%AE%B4_(%E9%9B%BB%E5%BD%B1)",
},
{name: "Run Lola Run",
 year: "1998",
 editor: "Tom Tykwer",
 image_url: "http://s3images.coroflot.com/user_files/individual_files/original_146124_vnAYUMrXjMvKZKsElKUmGhrS5.jpg",
 wiki: "https://en.wikipedia.org/wiki/Run_Lola_Run",
},
{name: "The Truman Show",
 year: "1998",
 editor: "Peter Weir",
 image_url: "https://i.pinimg.com/564x/a0/71/44/a07144965ba3052a40ce7cfd6dc9e6a8.jpg",
 wiki: "https://en.wikipedia.org/wiki/The_Truman_Show",
},
{name: "Eternal Sunshine of the Spotless Mind",
 year: "2004",
 editor: "Michel Gondry",
 image_url: "https://i.pinimg.com/236x/10/e5/43/10e54384fb4241ecf4f0d67207bf1f9f.jpg",
 wiki: "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
},


]

var vue = new Vue({
    el: "#movie",
    data:{
        moviedatas: moviedatas,
        filter: "",
    },
    computed:{
        filter_moviedatas: function(){
            var vobj = this
            return this.moviedatas.filter(function(movie){
                // return true

                var tags = ["name","year","editor"]
                var flag = false
                tags.forEach(function(now_tag){
                   if (movie[now_tag].toLowerCase().indexOf(vobj.filter.toLowerCase())!= -1){
                    flag = true
                }
                })
                return flag

            }).map(function(obj){
                if (vobj.filter=="")return obj
                var tem_obj = JSON.parse(JSON.stringify(obj))
                var tags = ["name","year","editor"]
                tags.forEach(function(now_tag){
                var match_word = tem_obj[now_tag].match(new RegExp(vobj.filter,"i"))
                if(match_word)
                    tem_obj[now_tag]= tem_obj[now_tag].replace(new RegExp(vobj.filter,"i"),"<span class=highlight>"+match_word+"</span>")
                })
                return tem_obj
            });
            // return this.moviedatas.filter(function(movie){
            //     var tags = ["name","year","editor"]
            //     var flag = false
            //     tags.forEach(function(now_tag){
            //     if (movie[now_tag].indexOf(vobj.filter)!= -1)
            //         {flag = true;}
            // })
            //     return flag

            // })
        },
    },
})