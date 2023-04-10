<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stichoza\GoogleTranslate\GoogleTranslate;

class TranslateController extends Controller
{
    public function translate(Request $request){

        $translatedValues = [];

        $tr = new GoogleTranslate('ar');
        foreach ($request->all() as $name => $value){
            $translatedValues += [
                $name => $tr->translate($value)
            ];
        }
        return $translatedValues;
    }
}
