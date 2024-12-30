# nest-demo-acl

The demo of authorization via Access-Control-List which powered by NestJS.

## Usage

### Step1

Create database.

```bash
create database acl-test default character set utf8mb4;
```

For mysql connection configuration, please refer to [https://github.com/renjie-run/nest-demo-acl/blob/5f32b82b8bfa39e6d0b9f2cee15ad07761302317/src/app.module.ts](https://github.com/renjie-run/nest-demo-acl/blob/5f32b82b8bfa39e6d0b9f2cee15ad07761302317/src/app.module.ts)


### Step2

Initialize tables for this project.

Set `synchronize` to `true` before start the project, then start the project.

```ts
TypeOrmModule.forRoot({
      ...
      synchronize: false,
      ...
    })
```

After the tables initialization, you can close the synchronize.


### Step3

Initialize users and permissions.

Apply this initialization via the API:

```bash
http://127.0.0.1:8082/user/init
```


### Step4

The token to get user info is required which you can get it from [nest-demo-register-login](https://github.com/renjie-run/nest-demo-register-login)


### Step5

Access this API with the token of user1/user2

```bash
http://127.0.0.1:8082/group-a
```

Access this API with the token of user1/user2

```bash
http://127.0.0.1:8082/group-b
```

