document.querySelectorAll('.scene').forEach((elem) => {

    const modifier = elem.getAttribute('data-modifier')

    basicScroll.create({
        elem: elem,
        from: 0,
        to: 519,
        props: {
            '--translateY': {
                from: '0',
                to: `${10 * modifier}px`,
                direct: true
            }
        }
    }).start()

})


// ハンバーガーメニューボタンのクリックイベント
document.getElementById('hamburger-menu').addEventListener('click', function () {
    // nav-menu の表示・非表示を切り替える
    document.getElementById('nav-menu').classList.toggle('hidden');
});


