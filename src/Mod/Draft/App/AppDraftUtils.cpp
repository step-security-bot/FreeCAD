/***************************************************************************
 *   Copyright (c) Yorik van Havre (yorik@uncreated.net) 2015              *
 *                                                                         *
 *   This file is part of the FreeCAD CAx development system.              *
 *                                                                         *
 *   This library is free software; you can redistribute it and/or         *
 *   modify it under the terms of the GNU Library General Public           *
 *   License as published by the Free Software Foundation; either          *
 *   version 2 of the License, or (at your option) any later version.      *
 *                                                                         *
 *   This library  is distributed in the hope that it will be useful,      *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU Library General Public License for more details.                  *
 *                                                                         *
 *   You should have received a copy of the GNU Library General Public     *
 *   License along with this library; see the file COPYING.LIB. If not,    *
 *   write to the Free Software Foundation, Inc., 59 Temple Place,         *
 *   Suite 330, Boston, MA  02111-1307, USA                                *
 *                                                                         *
 ***************************************************************************/


#include "PreCompiled.h"
#ifndef _PreComp_
# include <Python.h>
#endif

#include <Base/Console.h>
#include <Base/Interpreter.h>

extern struct PyMethodDef DraftUtils_methods[];

PyDoc_STRVAR(module_DraftUtils_doc, "The DraftUtils module contains utility functions for the Draft module.");

/* Python entry */
extern "C" {
    
    void DraftUtilsExport initDraftUtils()
    {
        // load dependent module
        try {
            Base::Interpreter().loadModule("Part");
        }
        catch(const Base::Exception& e) {
            PyErr_SetString(PyExc_ImportError, e.what());
            return;
        }
        PyObject* DraftUtilsModule = Py_InitModule3("DraftUtils", DraftUtils_methods, module_DraftUtils_doc);   /* mod name, table ptr */
        Base::Console().Log("Loading DraftUtils module... done\n");
    }

} // extern "C"
