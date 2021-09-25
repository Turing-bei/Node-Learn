# Node 服务端应用开发

## 生成密钥与公钥匙

```
cd config
openssl
genrsa -out private.key 4096
rsa -in private.key -pubout -out public.key
exit
```
