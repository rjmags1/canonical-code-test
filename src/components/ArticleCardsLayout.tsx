function Layout({ children }: React.PropsWithChildren) {
    return (
        <div
            style={{
                padding: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                height: '100%',
                width: '100%',
            }}
        >
            <div className="row u-equal-height">{children}</div>
        </div>
    )
}

export default Layout
