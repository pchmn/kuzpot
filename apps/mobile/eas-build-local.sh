rm -rf /Users/paul/Dev/perso/kuzpot-eas-build-process
rm -rf /Users/paul/Dev/perso/kuzpot-eas-build-artifacts

mv ../../.gitignore ../../.gitignore-bak
mv ../../.gitignore-eas-build ../../.gitignore

eas build --non-interactive --platform=android --profile=preview --local

mv ../../.gitignore ../../.gitignore-eas-build
mv ../../.gitignore-bak ../../.gitignore
