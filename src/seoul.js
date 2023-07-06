import React, {useCallback, useMemo, useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

function Seoul() {
    return (
        <div>
            <Link to='/' >main</Link>
            <h1>seoul</h1>
        </div>
    )
}

export default Seoul;