import * as Navigation from './Navigation'
import clsx from 'clsx'
import * as Collapsible from '@radix-ui/react-collapsible'
import { CaretDoubleLeft } from 'phosphor-react'
import { CreatePage } from './CreatePage'
import { Profile } from './Profile'
import { Search } from './Search'
import { useQuery } from '@tanstack/react-query'

export function Sidebar() {
  const isMacOS = process.platform === 'darwin'

  const { data } = useQuery({
    queryKey: ['documents'],
    queryFn: async () => {
      const response = window.api.fetchDocuments()

      return (await response).data
    },
  })

  return (
    <Collapsible.Content className="bg-rotion-800 flex-shrink-0 border-r border-rotion-600 h-screen relative group data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut overflow-hidden">
      <div className="flex w-full justify-end pr-4">
        <Collapsible.Trigger
          className={clsx(
            'h-5 w-5 right-4 text-rotion-200 hover:text-rotion-50 inline-flex items-center justify-center',
            {
              'mt-[1.125rem]': isMacOS,
              'mt-6': !isMacOS,
            },
          )}
        >
          <CaretDoubleLeft className="h-4 w-4" />
        </Collapsible.Trigger>
      </div>
      <div
        className={clsx('region-drag h-14', {
          block: isMacOS,
          hidden: !isMacOS,
        })}
      ></div>

      <div
        className={clsx(
          'flex-1 flex flex-col gap-8 h-full w-[240px] group-data-[state=open]:opacity-100 group-data-[state=closed]:opacity-0 transition-opacity duration-200',
          {
            'pt-6': !isMacOS,
          },
        )}
      >
        <Profile />
        <Search />

        <Navigation.Root>
          <Navigation.Section>
            <Navigation.SectionTitle>Workspace</Navigation.SectionTitle>
            <Navigation.SectionContent>
              {data?.map((document) => {
                return (
                  <Navigation.Link key={document.id}>
                    {document.title}
                  </Navigation.Link>
                )
              })}
              <Navigation.Link>Untitled</Navigation.Link>
              <Navigation.Link>Discover</Navigation.Link>
              <Navigation.Link>Ignite</Navigation.Link>
              <Navigation.Link>Rocketseat</Navigation.Link>
            </Navigation.SectionContent>
          </Navigation.Section>
        </Navigation.Root>

        <CreatePage />
      </div>
    </Collapsible.Content>
  )
}
