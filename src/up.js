import { chdir, cwd} from 'process';

export const up = () => {
    const pathUp = cwd().split('\\').slice(0, -1).join('\\');
    chdir(pathUp);
    console.log(`You are currently in path to working_directory: ${pathUp}\n`);
};
