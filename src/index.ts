#! /usr/bin/env node

import { program } from 'commander'
import { exec } from 'child_process'

const programs = [
  {
    command: 'mysql',
    description: 'Run MySQL container',
    action: () => {
      if ('root' in program.opts() && program.opts().root === true) {
        exec(`cd ${__dirname}/../dock/rdbms/mysql && sudo docker-compose up --build -d`, (err) => {
          if (err) {
            throw err
          }
          console.log('MySQL Container launched successfully')
        })
      } else {
        exec(`cd ${__dirname}/../dock/rdbms/mysql && docker-compose up --build -d`, (err) => {
          if (err) {
            throw err
          }
          console.log('MySQL Container launched successfully')
        })
      }
    }
  },
  {
    command: 'postgres',
    description: 'Run Postgres container',
    action: () => {
      if ('root' in program.opts() && program.opts().root === true) {
        exec(`cd ${__dirname}/../dock/rdbms/postgres && sudo docker-compose up --build -d`, (err) => {
          if (err) {
            throw err
          }
          console.log('Postgres Container launched successfully')
        })
      } else {
        exec(`cd ${__dirname}/../dock/rdbms/postgres && docker-compose up --build -d`, (err) => {
          if (err) {
            throw err
          }
          console.log('Postgres Container launched successfully')
        })
      }
    }
  },
  {
    command: 'redis',
    description: 'Run Redis container',
    action: () => {
      if ('root' in program.opts() && program.opts().root === true) {
        exec(`cd ${__dirname}/../dock/cache/redis && sudo docker-compose up --build -d`, (err) => {
          if (err) {
            throw err
          }
          console.log('Redis Container launched successfully')
        })
      } else {
        exec(`cd ${__dirname}/../dock/cache/redis && docker-compose up --build -d`, (err) => {
          if (err) {
            throw err
          }
          console.log('Redis Container launched successfully')
        })
      }
    }
  },
]

programs.forEach((programType) => {
  program.command(programType.command)
    .action(programType.action)
    .description(programType.description)
})

program.option('-r, --root', 'Run as sudo').parse()
