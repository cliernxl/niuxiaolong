####base-project 使用说明:
    项目依赖:
        - sinosoft-platform-ui
        
    流程: 
        1. 必须有sinosoft-platform-ui项目权限。
        2. 配置sinosoft-platform-ui 项目ssh证书或者个人git ssh证书。
        3. 通过npm将sinosoft-platform-ui安装到node_modules下(生成文件夹名: node_modules/base-ui)。
        4. npm run copyCommon 将common_modules复制到根目录。
        5. npm run copyBaseUI 将base-ui复制到根目录。
        6. npm run build    构建项目
        7. npm run dev      本地启动项目