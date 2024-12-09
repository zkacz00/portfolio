<script lang="ts">
  import ProgressBar from './../atoms/ProgressBars/ProgressBar.svelte';
  import IconContainer from "../atoms/Buttons/IconContainer.svelte";
  import Text from "../atoms/Text/Text.svelte";
  import Tag from "../atoms/Buttons/Tag.svelte";
  import Flex from "../atoms/Spacing/Flex.svelte";
  import { TextColorVariant } from "../../types/variants";
  import { type Skill } from '../../content/skills';
  import { JustifyContent, AlignItems, FlexDirection, FlexWrap, FontWeight, Size, Align } from '../../types/styles';
  import Span from '../atoms/Text/Span.svelte';

  export let skill: Skill;
</script>

<div class={`SkillBox SkillBox--${skill}`}>
  <Flex direction={FlexDirection.ROW} justify={JustifyContent.START} gap={2}>
      <IconContainer icon={skill.icon} isButton={false} />
    <Text color={TextColorVariant.BLACK} align={Align.LEFT} fontWeight={FontWeight.MEDIUM}>{skill.title}</Text>
  </Flex>
  {#if skill.title === 'Languages'}
    <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={0.5}>
      {#each Object.values(skill.skills) as specificSkill}
        <Flex direction={FlexDirection.COLUMN} align={AlignItems.START} gap={0.5}>
            <Flex direction={FlexDirection.ROW} justify={JustifyContent.START} gap={1}>
                <Span size={Size.SMALL} fontWeight={FontWeight.MEDIUM}>{specificSkill.title}</Span>
                <Span size={Size.SMALL} fontWeight={FontWeight.REGULAR}>|</Span>
                <Span size={Size.SMALL} fontWeight={FontWeight.REGULAR}>{specificSkill.level}</Span>
            </Flex>
          <ProgressBar value={specificSkill.procent} />
        </Flex>
      {/each}
    </Flex>
  {:else if Array.isArray(skill.skills)}
    <Flex direction={FlexDirection.ROW} justify={JustifyContent.START} gap={0.5} wrap={FlexWrap.WRAP}>
      {#each skill.skills as specificSkill}
        <Tag>{specificSkill}</Tag>
      {/each}
    </Flex>
  {/if}
</div>

<style>
  .SkillBox {
    background-color: var(--color-primary-white);
    padding: 2rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    height: 100%;
    border-radius: 3rem;
    box-shadow: var(--box-shadow-small-white);
  }

  /* .SkillBox--lacking i {
    background-color: var(--color-primary-white);
    padding: 2rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    height: auto;
    border-radius: var(--border-radius-small);
  } */
</style>
