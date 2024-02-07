import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';

const MySkills = () => {

  const skillsPics = [
    { name: 'React', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841268/b2awgzivo1jyypzjy83c.png' },
    { name: 'JavaScript', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695855096/y5op4ipnwcbbnhi7weu6.png' },
    { name: 'Express', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695855096/az01veztt5znwzngu2bz.png' },
    { name: 'HTML5', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841268/neowtyyhlvafdx0n3tum.png' },
    { name: 'CSS', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695855096/cbpbfmp5p4iuqoshtrup.png' },
    { name: 'Node.js', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695855096/rykyv8ds5s55uhqou9oe.png' },
    { name: 'Git', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841268/nq37zp9f5rgc4a7szhvu.png' },
    { name: 'TypeScript', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841267/r6uv8u9mrmvcuj0ap5zk.png' },
    { name: 'MongoDB', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841267/ldlyqvke3zaovopvtmno.png' },
    { name: 'Tailwind', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841267/plazwtwfa3pakdazxxw7.png' },
    { name: 'Cloudinary', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/t_cloud/pbretokp8mgrcgksud77.jpg' },
    { name: 'Postman', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841267/brhm6p9xi9uhiot322ps.png' },
    { name: 'Visual Studio', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841267/mol0qcv8nguoiuhyiq6q.jpg' },
    { name: 'Bootstrap', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/t_bootstrap/vbo0ncppqoapuwcn1jr6.jpg' },
    { name: 'Vite', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695871132/ehvf1ezwy0r374udukik.png'}

  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (

    <div>
      <h1 style={{ fontFamily: 'Protest Strike, sans-serif', padding: '12%', paddingBottom: '0%'}}>Skills</h1>

      <div className="flex justify-center">
        <JavascriptOutlinedIcon fontSize='large'/>
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsPics.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <img src={skill.imageSrc} alt={`${skill.name} Logo`} className="mx-auto h-16" />
                  <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
                </div>
              ))}
            </div> */}
          </div>

      
    </div>
  )
}

export default MySkills