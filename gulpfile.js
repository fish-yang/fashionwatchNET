var gulp = require('gulp');

gulp.task("copyfiles", function() {
	gulp.src("*.html").pipe(gulp.dest("D:\\php\\WWW\\\FashionWatchNet"));
})
gulp.task("images", function() {
	gulp.src("images/**/*.{jpg,png,gif}").pipe(gulp.dest("D:\\php\\WWW\\\FashionWatchNet\\images"));
})
gulp.task("copyhtml", function() {
	gulp.src("html/*.html").pipe(gulp.dest("D:\\php\\WWW\\\FashionWatchNet\\html"));
})
gulp.task("copyphp", function() {
	gulp.src("php/*.php").pipe(gulp.dest("D:\\php\\WWW\\\FashionWatchNet\\php"));
})
gulp.task("copycss", function() {
	gulp.src("css/*.css").pipe(gulp.dest("D:\\php\\WWW\\\FashionWatchNet\\css"));
})
gulp.task("copyjs", function() {
	gulp.src("js/*.js").pipe(gulp.dest("D:\\php\\WWW\\\FashionWatchNet\\js"));
})

gulp.task("build", ["copyfiles", "images", "copyhtml", "copycss", "copyjs","copyphp"], function() {
	console.log("复制完成");
})
gulp.task("watch", function() {
	gulp.watch("*.html", ["copyfiles"]);
	gulp.watch("images/**/*", ["images"]);
	gulp.watch("html/*.html", ["copyhtml"]);
	gulp.watch("css/*.css", ["copycss"]);
	gulp.watch("js/*.js", ["copyjs"]);
	gulp.watch("php/*.php", ["copyphp"]);
})
gulp.task("copyall", function() {
	gulp.src("*")
	.pipe(gulp.dest("D:\\php\\WWW\\day35"));
})