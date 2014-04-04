module.exports = {
    compile: {
        files: {
            '<%= config.app %>/scripts/common/templates.js': [
                '<%= config.app %>/scripts/common/templates-raw/*.dust',
                '<%= config.app %>/scripts/modules/{,*/}templates/*.dust'
            ]
        }
    }
};