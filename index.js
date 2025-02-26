#!/usr/bin/env node
import chalk from 'chalk'
import arg from 'arg'
import { getConfig } from './src/config/config-manager.js'
import { start } from './src/commands/start.js'
import { createLogger } from './src/logger.js'
import { mkdirSync, writeFileSync, existsSync } from 'fs'

const logger = createLogger('bin')

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean
    })
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



    // logger.debug('Received args', args)

    // if (args['--start']) {
    //     const config = getConfig()
    //     start(config)
    // }
} catch (err) {
    logger.warning(err.message)
    console.log()
    usage()
}

function usage() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    ${chalk.greenBright('--build')}\tBuilds the app
        `)
}
