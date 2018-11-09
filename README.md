<div id="container"></div>
<link rel="stylesheet" href="https://imsun.github.io/gitment/style/default.css">
<script src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
<script>
    var gitment = new Gitment({
        id: '页面 ID'
        owner: '你的 GitHub ID',
        repo: '存储评论的 repo',
        oauth: {
            client_id: '577e221d4d0c72994afe',
            client_secret: 'dedc94f3f91d925cbea448c9083a7ba60f577988',
        },
     })
    gitment.render('container’); 
</script>
