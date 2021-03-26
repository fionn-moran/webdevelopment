$(document).ready(function() {

const trophy =[
        {
            'competition':'Community Shield',
		    'trophies':21,
	        'years':'1908, 1911, 1952, 1956-57, 1965, 1967, 1977, 1983, 1990, 1993, 1994, 1996-97, 2003, 2007-08, 2010-11, 2013, 2016'
        },
        {
            'competition':'Premier League',
		    'trophies':20,
	        'years':'1907, 1910, 1951, 1955-56, 1964, 1966, 1992-93, 1995-96, 1998-00, 2002, 2006-08, 2010, 2012'
        },
      {
            'competition':'FA Cup',
		    'trophies':12,
	        'years':'1908, 1947, 1962, 1976, 1982, 1984, 1989, 1993, 1995, 1998, 2003, 2015'
,
        },
	    {
            'competition':'Football League Cup',
		    'trophies':5,
	        'years':'1991, 2005, 2008-09, 2016'
,
        },
	    {
            'competition':'UEFA Champions League',
		    'trophies':3,
	        'years':'1967, 1998, 2007'
,
        },
	 	{
            'competition':'European Cup Winners Cup',
		    'trophies':1,
	        'years':'1990'
        },
		{
            'competition':'Community Shield',
		    'trophies':1,
	        'years':'2008'
        },
		{
            'competition':'Community Shield',
		    'trophies':1,
	        'years':'1991'
        },
		{
            'competition':'Community Shield',
		    'trophies':1,
	        'years':'1999'
        },
	{
            'competition':'Community Shield',
		    'trophies':1,
	        'years':'2016'
        }
];

let template   = Handlebars.compile($("#tro-template").html());
let theCompiledHtml = template(trophy);
$("#content-placeholder").html(theCompiledHtml);

$('#newtroform').submit(function(evt) {
	evt.preventDefault();
    newtro= {
	 competition:$('#competition').val(),
	 trophies:$('#trophies').val(),
	 years:$('#years').val()
    }
    trophy.push(newtro);

    let theCompiledHtml = template(trophy);
    $("#content-placeholder").html(theCompiledHtml);

    $('.troModal').modal('hide');
    $('input[type="text"]').each(function() {
		$(this).val("");
    });
});
$("#btncall").on('click', function(){
		$(".troModal").modal('show');
});
		$('button').on('click', function() {
             $('#para').show();
         });
});
	