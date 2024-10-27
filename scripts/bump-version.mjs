import { readFile, writeFile } from 'fs/promises';

async function bumpVersion() {
    try {
        const packageJsonPath = './package.json';
        const packageContent = await readFile(packageJsonPath, 'utf-8');
        const pkg = JSON.parse(packageContent);

        let [major, minor, patch] = pkg.version.split('.').map(Number);
        if (patch === 99) {
            if (minor === 99) {
                major += 1;
                minor = 0;
                patch = 0;
            } else {
                minor += 1;
                patch = 0;
            }
        } else {
            patch += 1;
        }

        pkg.version = `${major}.${minor}.${patch}`;
        await writeFile(packageJsonPath, JSON.stringify(pkg, null, 2));
        console.log(`Version bumped to: ${pkg.version}`);
    } catch (error) {
        console.error('Error bumping version:', error);
    }
}

bumpVersion();
