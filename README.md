# dockdb
use dockerized databases without hassle

### Postgres
```bash
docker exec -i <CONAINER_ID> pg_restore -U <USER_NAME> -d <DB> < <BACKUP>
```

### Mysql
```bash
docker exec -i <CONAINER_ID> -u <USER_NAME> -p <DB> < <BACKUP>
```
