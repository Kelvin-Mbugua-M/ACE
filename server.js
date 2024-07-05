const url = require('url')
const path = require('path')
require('dotenv').config()
const http = require('http')
const fs = require('fs')
const port = process.env.PORT||4000
http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile(path.join(__dirname,'public/assets','index.ejs'),(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'text/html'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if (req.url==='/src/styles/header.css'){
        fs.readFile(path.join(__dirname,'src/styles','header.css'),(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'text/html'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }
   else if (req.url==='/src/styles/nav.css'){
        fs.readFile(path.join(__dirname,'src/styles','nav.css'),(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'text/html'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })     
    }
    else if (req.url==='/src/styles/index.css'){
        fs.readFile(path.join(__dirname,'src/styles','index.css'),(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'text/html'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })     
    }
    else if (req.url==='/src/scripts/navHidden.js'){
        fs.readFile(path.join(__dirname,'src/scripts','navHidden.js'),(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'script/js'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }
    else if (req.url==='/src/scripts/navCollapse.js'){
        fs.readFile(path.join(__dirname,'src/scripts','navCollapse.js'),(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'script/js'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }
    else if (req.url==='/src/images/icons/home.png'){
        fs.readFile(path.join(__dirname,'/src/images/icons','home.png'),(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }
    else if (req.url.match('/src/images/icons/setting.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }   
     else if (req.url.match('/src/images/icons/star.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }    
    else if (req.url.match('/src/images/icons/coffee.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }    
    else if (req.url.match('/src/images/icons/information.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }    
    else if (req.url.match('/src/images/icons/drama.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }    
    else if (req.url.match('/src/images/icons/badge.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }    
    else if (req.url.match('/src/images/icons/close.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }    
    else if (req.url.match('/src/images/icons/menu.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }
    else if (req.url.match('/src/images/icons/left.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }
    else if (req.url.match('/src/images/icons/right.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }
    else if (req.url.match('/src/images/icons/left.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }
    else if (req.url.match('/src/images/icons/popcorn.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }
    else if (req.url.match('/src/images/icons/search.png')){
        const filePath = path.join(__dirname,req.url)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(404,{'content-Type':'image/png'})
                res.write('404 The requested resource is not on this server')
                res.end()
            }
            res.writeHead(200,{'content-Type':'text/css'})
            res.write(data)
            res.end()
        })
    }
    else{
        res.writeHead(404,{'content-Type':'text/html'})
        res.write('404 The requested resource is not on this server')
        res.end()
    }
}).listen(port,()=> console.log(`the server is running on link -- localhost:${port}`))