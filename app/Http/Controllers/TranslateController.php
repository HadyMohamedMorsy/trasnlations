<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stichoza\GoogleTranslate\GoogleTranslate;

class TranslateController extends Controller
{
    public function translate(Request $request){
        $test = 'hello';
        $translatedValues = [];

        $result = '';
        $tr = new GoogleTranslate('ar');
        // foreach ($request->all() as $name => $value){
        //     $result .= $value;
        // }
       $testing =  $tr->translate($test);
        return $testing;
    }
}
