var gulp = require("gulp");//require:相当于<script src="gulp.js"></script>


//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能
gulp.task("copy-html",function(){
	gulp.src("*.{html,php}").pipe(gulp.dest("D:\\phpStudy\\WWW\\seleced"));
});
gulp.task("copy-video",function(){
	gulp.src("video/shiping.mp4").pipe(gulp.dest("D:\\phpStudy\\WWW\\seleced\\video"));
});
gulp.task("copy-js",function(){
	gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\seleced\\js"));
});
gulp.task("copy-css",function(){
	gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\seleced\\css"));
});

gulp.task('copy-img',function(){
	gulp.src('img/*.{jpg,png}')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\seleced\\img'));
})


//sass文件的编译
gulp.task('sassfile',function(){
	gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\seleced\\css'));
})
//监听
gulp.task("watchall",function(){
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;
	gulp.watch("*.{html,php}",["copy-html"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("video/*.css",["copy-video"]);
	gulp.watch('img/*.{jpg,png}',["copy-img"]);
});
