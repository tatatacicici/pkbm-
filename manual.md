<!-- styling readme stye in below sentences -->

To create a new Nx workspace with Next.js run
npx create-nx-workspace@latest --preset=next.

Adding Next.js to an existing Nx workspace
yarn add --dev @nx/next
w
Creating Applications
nx g @nx/next:app admin-kampus-gratis

Generating Libraries
nx g @nx/next:lib my-new-lib

Generating Pages and Components
nx g @nx/next:page my-new-page --project=my-new-app
nx g @nx/next:component my-new-component --project=my-new-app

Tailwind setup
nx g @nx/react:setup-tailwind --project=<your app here>

@nx/workspace:move
Move libs/my-feature-lib to libs/shared/my-feature-lib:
nx g @nx/workspace:move --project=my-feature-lib --destination=shared/my-feature-lib

Remove my-feature-lib from the workspace:
nx g @nx/workspace:remove my-feature-lib
