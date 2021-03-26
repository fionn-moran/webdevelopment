$(document).ready(function() {
const players = [
       {
        "name":"David",
        "fullname":"david de gea",
        "image":"images/degea.jpg",
        "age":29,
        "job":"the first choice Goalkeeper.",
        "goals":"no",
        "position":"Goalkeeper"
       },
      {
	"name":"Aaron",
        "fullname":"aaron wan bissaka",
	"image":"images/aaron.jpg",
	"age":22,
	"job":"a Right Back.",
    "goals":"no",
    "position":"Defender"
},
{
	"name":"Harry",
        "fullname":"harry maguire",
	"image":"images/maguire.jpg",
	"age":27,
	"job":"a Center Back.",
        "goals":1,
        "position":"Defender"
},
{
	"name":"Victor",
        "fullname":"victor lindelof",
	"image":"images/lindelof.jpg",
	"age":25,
	"job":"a Left Back.",
        "goals":1,
        "position":"Defender"
},
{
	"name":"Paul",
        "fullname":"paul pogba",
	"image":"images/pogba.jpg",
	"age":27,
	"job":"a Central Defensive Midfielder.",
        "goals":"no",
        "position":"Midfielder"
},
{
	"name":"Jesse",
        "fullname":"jesse lingard",
	"image":"images/lingard.jpg",
	"age":27,
	"job":"a Central Midfielder.",
        "goals":2,
        "position":"Midfielder"
},
{
	"name":"Scott",
        "fullname":"scott mctominay",
	"image":"images/mctominay.jpg",
	"age":23,
	"job":"a Right Winger.",
        "goals":5,
        "position":"Attacker"
},
{
	"name":"Daniel",
        "fullname":"daniel james",
	"image":"images/james.jpg",
	"age":22,
	"job":"a Central Attacking Midfielder.",
        "goals":4,
        "position":"Attacker"
},
{
	"name":"Anthony",
        "fullname":"anthony martial",
	"image":"images/martial.jpg",
	"age":24,
	"job":"a Left Winger.",
        "goals":16,
        "position":"Attacker"
},
{
	"name":"Marcus",
    "fullname":"marcus rashford",
	"image":"images/rashford.jpg",
	"age":22,
	"job":"a Striker.",
        "goals":19,
        "position":"Attacker"
},	
];

Handlebars.registerHelper('capitalise', function(str) {
  let data=str.split(" ");
  let formattedname="";
  for (i in data) {
     formattedname+= data[i].charAt(0).toUpperCase() + data[i].substring(1,).toLowerCase() + " ";
  }
  return formattedname;
});


let template = Handlebars.compile($('#teamplayers').html());

let output = template(players);

$('#players').append(output);
  $('#teamimg').hover(function(){
  $(this).attr('src', 'images/team1960.jpg');
   },
  function(){
  $(this).attr('src', 'images/team.jpg');
  });
});