import React, { useEffect, useState, useRef } from 'react'

const Icon = ({ name, type, ...rest }) => {
    const ImportedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);

    let folder

    switch (type) {
        case 'label':
            folder = 'labels'
            break;
        case 'no-label':
            folder = 'no-labels'
            break;

        case 'tag':
            folder = 'tags'
            break;
    
        default:
            folder = 'no-labels'
            break;
    }

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = (await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!../../images/icons/${folder}/${name.toLowerCase()}.svg`)).default;
            } catch (err) {
                throw err;
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name, folder]);    

    if (!loading && ImportedIconRef.current) {
        const { current: ImportedIcon } = ImportedIconRef;
        return <ImportedIcon {...rest} />;
    }

    return null;
};

export default Icon;

// import React, { useState, useEffect, useRef } from 'react';
// const Icon = ({ name, type, size=16, fill="#000" }) => {
//   const ImportedIconRef = useRef(null);
//   const [loading, setLoading] = useState(false);

//   let folder

//       switch (type) {
//         case 'label':
//             folder = 'labels'
//             break;
//         case 'no-label':
//             folder = 'no-labels'
//             break;

//         case 'tag':
//             folder = 'tags'
//             break;
    
//         default:
//             folder = 'no-labels'
//             break;
//     }

//   useEffect(() => {
//     setLoading(true);
//     const importIcon = async () => {
//       try {
//         const { default: namedImport } = await import(`../../images/icons/${folder}/${name.toLowerCase()}.svg`);
//         ImportedIconRef.current = namedImport;
//       } catch (err) {
//         throw err;
//       } finally {
//         setLoading(false);
//       }
//     };
//     importIcon();
//   }, [name, folder]);

//   console.log(ImportedIconRef);
  

//   if (!loading && ImportedIconRef.current) {
//     const { current: ImportedIcon } = ImportedIconRef;
//     return <ImportedIcon />;
//   }

//   return null;
// };

// export default Icon
