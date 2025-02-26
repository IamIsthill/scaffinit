#!/usr/bin/env node
import chalk from 'chalk'
import arg from 'arg'
import { getConfig } from './src/config/config-manager.js'
import { start } from './src/commands/start.js'
import { createLogger } from './src/logger.js'
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'fs'

const logger = createLogger('bin')

try {
    const args = arg({
        '--init': Boolean
    })
    if (args['--init']) {
        createConfigFile()
    } else {
        createStructures()
    }
} catch (err) {
    logger.warning(err.message)
    console.log()
    usage()
}

function usage() {
    console.log(`${chalk.whiteBright('scaffinit [CMD]')}
    ${chalk.greenBright('--init')}\tCreates a configuration file for the project
        `)
}

function createStructures() {
    const basePath = process.cwd()
    const appList = ['app', 'controllers', 'middleware', 'routes', 'models']
    appList.forEach((app) => {
        const app_path = `${basePath}/${app}`
        if (!existsSync(app_path)) {
            mkdirSync(`${app_path}`)
            if (!existsSync(`${app_path}/index.js`)) {
                writeFileSync(`${app_path}/index.js`, '')
            }
        }
    })
}

function createConfigFile() {
    const userPath = process.cwd()
    const scaffConfig = readFileSync(`./src/templates/scaff.config.js`, 'utf-8')
    writeFileSync(`${userPath}/scaff.config.js`, scaffConfig)
    logger.log('Created scaff.config.js')
}
