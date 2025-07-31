import chalk from 'chalk';

export const logger = {
    info: (msg: string) => console.log(chalk.yellow(msg)),
    success: (msg: string) => console.log(chalk.green(msg)),
    error: (msg: string) => console.log(chalk.red(msg)),
}