const xprofiler = require("xprofiler");
const path = require("path");
const rootPath = path.resolve(process.cwd());
xprofiler.start({
    log_dir: `${rootPath}/log`, // 性能分析日志输出目录
    // log_interval: 60, // 采样间隔 60s
    // enable_log_uv_handles: false, // 不输出 uv 句柄分类详情
    // log_format_alinode: true, // 以 alinode 的格式输出日志
    // log_level: 0, // 只输出 info 日志
});
var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("hello, express");
});

app.listen(3000);