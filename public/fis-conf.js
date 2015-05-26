fis.config.merge({
    roadmap: {
        path: [{
            //所有的tpl文件
            reg: '**.tpl',
            //输出到map.json表中
            useMap: true
        }],
        // ext : {
        //     //coffee后缀的文件将输出为js文件
        //     //并且在parser之后的其他处理流程中被当做js文件处理
        //     tpl : 'ejs',
        // }
    }
});

// fis.config.set('settings.postpackager.simple.autoCombine', true);
fis.config.set('project.fileType.text', 'tpl, js, css');