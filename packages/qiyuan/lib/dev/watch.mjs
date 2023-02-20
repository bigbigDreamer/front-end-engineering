import { watch } from 'chokidar';

export default function runWatcher(fn) {
    const watcher = watch('qiyuan.config.js', {
        cwd: '.',
        persistent: true,
    });

    watcher.on('all', (name) => {
        if(name === 'change') {
            fn?.();
        }
    })
}
