import { Icon } from '@iconify/react'

export default function About() {
  return (
    <div font-sans text-gray-800 className='mx-10% sm:mx-20%'>
      <div h-20 mt-10>
        <Icon icon='material-symbols:info-outline' width='50' pos-center text-gray-700 />
      </div>
      <h1 text="xl center" font="bold sans">About</h1>
      <p my-5>
      <a href="https://github.com/Hacker-C/react-starter" target="_blank" underline><i>Reactease(React Starter)</i></a> is a <a href="https://vitejs.dev" target="_blank" underline><i underline>Vite</i></a> react starter template made by <a href="https://mphy.me" target="_blank"><i underline>@mphy</i></a> for creating react projects easily. With <b>React-Router</b>, <b>Eslint</b>, <b>TypeScript</b>, <b>file path alias</b>, uses <b>UnoCSS</b> for styling and <b>Iconnify</b> for icons. And we can use three modes of unocss style in the template which are "Class Property", "Attributify", "Valueless Attributify". Of course, above are all fully typed.
      </p>
      <p my-5>More features will be added...</p>
      <p my-5>
        Check out the
          <a href="https://github.com/Hacker-C/react-starter" target="_blank" underline> <i>GitHub repo</i> </a>
        for more details.
      </p>
    </div>
  )
}
