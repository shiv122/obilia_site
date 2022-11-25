<?php

namespace App\View\Components\Utils;

use Illuminate\View\Component;

class Select extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */


    public $id;
    public $name;
    public $label;
    public $required;
    public $disabled;
    public $class;
    public $multiple;
    public $options;
    public $appendOptionText;
    public $appendOptionValue;
    public $attrs;
    public $selected;
    public $subtext;
    public $search;
    public $icon;
    public $valueName;
    public $optionName;
    public $optionPrepend;
    public $showTill;
    public $maxSelect;


    public function __construct(
        $name,
        $id = null,
        $label = null,
        $required = true,
        $disabled = false,
        $class = '',
        $multiple = false,
        array $options = [],
        $appendOptionText = null,
        $appendOptionValue = null,
        array $attrs = null,
        $selected = null,
        $subtext = null,
        $search = true,
        $icon = null,
        $valueName = 'id',
        $optionName = 'name',
        $optionPrepend = null,
        int $showTill = null,
        int $maxSelect = null

    ) {
        $this->id = $id;
        $this->name = $name;
        $this->label = $label;
        $this->required = $required;
        $this->disabled = $disabled;
        $this->class = $class;
        $this->multiple = $multiple;
        $this->options = $options;
        $this->appendOptionText = $appendOptionText;
        $this->appendOptionValue = $appendOptionValue;
        $this->attrs = $attrs;
        $this->selected = $selected;
        $this->subtext = $subtext;
        $this->search = $search;
        $this->icon = $icon;
        $this->valueName = $valueName;
        $this->optionName = $optionName;
        $this->optionPrepend = $optionPrepend;
        $this->showTill = $showTill;
        $this->maxSelect = $maxSelect;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.utils.select');
    }
}