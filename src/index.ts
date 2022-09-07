#! /usr/bin/env node

import { program } from 'commander'
import { exec } from 'child_process'

const programs = [
  {
    command: 'mysql',
    description: 'Run MySQL container',
    action: () => {
      exec('cd rdbms/mysql && docker-compose up --build -d', (err) => {
        if (err) {
          throw err
        }
        console.log('MySQL Container launched successfully')
      })
    }
  },
  {
    command: 'postgres',
    description: 'Run Postgres container',
    action: () => {
      exec('cd rdbms/postgres && docker-compose up --build -d', (err) => {
        if (err) {
          throw err
        }
        console.log('Postgres Container launched successfully')
      })
    }
  },
  {
    command: 'redis',
    description: 'Run Redis container',
    action: () => {
      exec('cd cache/redis && docker-compose up --build -d', (err) => {
        if (err) {
          throw err
        }
        console.log('Redis Container launched successfully')
      })
    }
  },
  {
    command: 'cloud-beaver',
    description: 'Run Cloudbeaver',
    action: () => {
      exec('cd ui/cloud-beaver && docker-compose up --build -d', (err) => {
        if (err) {
          throw err
        }
        console.log('Cloud Beaver launched successfully')
      })
    }
  },
  {
    command: 'redis-commander',
    description: 'Run Redis Commander',
    action: () => {
      exec('cd ui/redis-commander && docker-compose up --build -d', (err) => {
        if (err) {
          throw err
        }
        console.log('Redis Commander launched successfully')
      })
    }
  }
]

programs.forEach((programType) => {
  program.command(programType.command)
    .action(programType.action)
    .description(programType.description)
})

program.parse()
