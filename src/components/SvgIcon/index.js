import React, { useEffect, useState, useRef } from 'react'

const Icon = ({ name, type, width, ...rest }) => {
    const ImportedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);

    let folder
    let defaultWidth

    switch (type) {
        case 'label':
            folder = 'labels'
            defaultWidth = 60
            break;

        case 'no-label':
            folder = 'no-labels'
            defaultWidth = 60
            break;

        case 'tag':
            folder = 'tags'
            defaultWidth = 120
            break;
    
        default:
            folder = 'no-labels'
            defaultWidth = 60
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
        return <ImportedIcon width={width || defaultWidth} height={undefined} {...rest} />;
    }

    return null;
};

export default Icon;
