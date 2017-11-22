var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
    source: './src/*.scss',
    doc: './docs/src/*.scss',
    source2: './src-dark/*.scss',
    doc2: './docs-dark/*.scss'
};

gulp.task('watch', function() {
    gulp.watch('./src/*.scss', ['build', 'docs']);
    gulp.watch('./docs/src/*.scss', ['docs']);
    gulp.watch('./src-dark/*.scss', ['build2', 'docs2']);
    gulp.watch('./docs-dark/src/*.scss', ['docs2']);
});

gulp.task('build', function() {
    gulp.src(paths.source)
        .pipe(sass({ outputStyle: 'compact', precision: 10 })
            .on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest('./dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('build2', function() {
    gulp.src(paths.source2)
        .pipe(sass({ outputStyle: 'compact', precision: 10 })
            .on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest('./dist-dark'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist-dark'))
        .pipe(gulp.dest('D:/ZeroNet-win-dist/data/1CWkZv7fQAKxTVjZVrLZ8VHcrN6YGGcdky/css'));
});

gulp.task('docs', function() {
    gulp.src(paths.doc)
        .pipe(sass({ outputStyle: 'compact', precision: 10 })
            .on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest('./docs/css'));
    gulp.src(paths.source)
        .pipe(sass({ outputStyle: 'compact', precision: 10 })
            .on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest('./docs/dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./docs/dist'));
});

gulp.task('docs2', function() {
    gulp.src(paths.doc2)
        .pipe(sass({ outputStyle: 'compact', precision: 10 })
            .on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest('./docs-dark/css'));
    gulp.src(paths.source2)
        .pipe(sass({ outputStyle: 'compact', precision: 10 })
            .on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest('./docs-dark/dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./docs-dark/dist'))
});

gulp.task('default', ['build']);