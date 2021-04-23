import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    toolbar:theme.mixins.toolbar
}))

export default function Header() {
    const classes = useStyles()
    return (
        <>
        <AppBar>
            <ToolBar>
                <Typography variant="h6">Quiz App</Typography>
            </ToolBar>
        </AppBar>
        <div className={classes.toolbar}></div>
        </>
    )
}
