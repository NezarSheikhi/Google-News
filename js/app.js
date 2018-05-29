$(function(){
    var input = $("#language");
    $('#language').change(function(e){
        e.preventDefault();
        var searchTerm = $('#language').val();
        getRequest(searchTerm);
    });
    
    // Get Api
    function getRequest(input){
        var url = 'https://newsapi.org/v2/top-headlines?' +
                  'country='+input 
        var rules = {
            apiKey: 'e95c6a508836438093637a6b3af04bae',
            s: input,
            r: 'json'
        };
    // Get Json data 
        $.getJSON(url, rules, function(response){
            $('#results').html('');
            for (var i in response.articles) {
                createNewsItem(response.articles[i]);
                
            }
        });
    }
    // CSS Using Javascript 
    var CLASS_NEWS_ITEM_VIEW = "NewsItemView";
    var CLASS_NEWS_IMG = "NewsImg";
    var COLOR_NEWS_ITEM_VIEW_ON_MOUSE = 'gray';
    // Creat Items
    function createNewsItem(article) {
        var template = `
        
            <div class="${CLASS_NEWS_ITEM_VIEW}">
            <img class="${CLASS_NEWS_IMG}" src="${article.urlToImage}" />
            <a href="${article.url}" target="_blank">${article.title}</a>
            <p>${article.description}</p>
            </div>
        
        `;
        $('#results').append(template);
    }
});
