import { ChartBarIcon, AcademicCapIcon, UserGroupIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Virtual Classroom',
    description:
      'LearnSpace provides a virtual classroom environment where educators can conduct live lectures, interactive discussions, and collaborative activities with students in real-time.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Professional Development Resources',
    description:
      'Educators have access to a wide range of professional development resources, including workshops, webinars, and online courses',
    icon: BookOpenIcon,
  },
  {
    name: 'Personalized Learning Paths',
    description:
      ' LearnSpace employs adaptive learning algorithms to create personalized learning paths for each student based on their individual strengths, weaknesses, and learning preferences.',
    icon: ChartBarIcon,
  },
  {
    name: 'Collaborative Learning Spaces',
    description:
      ' LearnSpace facilitates collaborative learning through virtual study groups, project teams, and peer-to-peer tutoring sessions.',
    icon: UserGroupIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white sm:py-1">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you Create an invotative Space for Learners.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
